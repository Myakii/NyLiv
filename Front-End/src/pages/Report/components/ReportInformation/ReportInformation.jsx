import React from 'react'
import './ReportInformation.css'

export default function ReportInformation() {
  return (
    <div className='report-information-container centered-padding-div'>

            <h2 className='text-center'>A savoir</h2>

            <article className='flex flex-col'>
                
                <div className='info-item flex flex-col'>
                    <h2>Pourquoi signaler ?</h2>

                    <h4>
                        Votre témoignage peut faire la différence dans la vie d'un animal 
                        en détresse.
                        En signalant des cas de maltraitance, 
                        vous contribuez directement à la protection 
                        de ces êtres vulnérables et à la sensibilisation
                        contre toute forme de cruauté animale. 
                        Chaque signalement est une étape vers un monde 
                        où les animaux peuvent vivre sans crainte, 
                        en sécurité et entourés d'amour.
                    </h4>
                </div>

                <div className='info-item flex flex-col'>
                    <h2>Comment signaler ?</h2>

                    <h4>
                        Nous avons créé un formulaire complet 
                        pour recueillir toutes les informations nécessaires
                        à une enquête approfondie. 
                        Votre coopération est essentielle 
                        pour nous aider à comprendre et à 
                        résoudre les situations difficiles 
                        auxquelles les animaux peuvent être confrontés. 
                        Nous vous encourageons à fournir autant de détails
                        que possible pour assurer une réponse efficace.
                    </h4>

                </div>

                <div className='info-item flex flex-col'>
                    <h2>Confidentialité et Respect</h2>

                    <h4>
                        Nous comprenons la délicatesse de ces 
                        situations et respectons votre souhait 
                        de rester anonyme. Vous avez la possibilité 
                        de signaler de manière confidentielle, assurant
                        ainsi la protection de votre identité tout 
                        en agissant pour le bien-être des animaux.
                    </h4>

                </div>

            </article>

        </div>
  )
}
