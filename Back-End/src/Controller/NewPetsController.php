<?php

namespace App\Controller;

use App\Entity\Pets;
use App\Form\PetsFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class NewPetsController extends AbstractController
{
    #[Route('/show')]
    public function show()
    {
        $pets = new Pets();
        $form = $this->createForm(PetsFormType::class, $pets);

        return $this->render('pets/show.html.twig', [
            'pets_form' => $form->createView(),
        ]);
    }
}
