import React from 'react'
import './ConditionAdopt.css'
import {Link} from 'react-router-dom';

export default function ConditionAdoption() {
  return (
    <div className='condition-adopt-container centered-padding-div'>

        <header>
            <div className='catch-phrase flex flex-col text-center gap-12'>  
                <div className='top-part'>
                    <h2>Adoptez,</h2>
                    <h2>un engagement sérieux,</h2>
                    <h2>une nouvelle vie à partager</h2>
                </div> 

                <div className='mid-part'>
                    <h4>ATTENTION, PRÉALABLEMENT À L’ADOPTION D’UN ANIMAL, VOUS DEVEZ SIGNER</h4>
                    <a href='https://www.la-spa.fr/adopter/sinformer-sur-ladoption/conditions-dadoption/le-certificat-dengagement-et-de-connaissance-des-besoins-specifiques-de-lespece/'
                        className='text-[#E6610F]'>UN CERTIFICAT D’ENGAGEMENT ET DE 
                        CONNAISSANCE DES BESOINS SPÉCIFIQUES DE L’ESPÈCE.
                    </a>  
                </div>

                <button className='btn btn-orange bottom-part'>
                    <Link to='/'>
                        J'adopte !
                    </Link>
                </button>

            </div>

            <img src='../Assets/DesignImg/ConditionAdoptDog.png' className='pl-20 condition-dog' />
        </header>

        <div className='pawns'>
            <div className='pawn pawn-col1'>  
                <img src='../Assets/DesignImg/pawn1.png' />
            </div>
            
            <div className='pawn pawn-col2'>
                <img src='../Assets/DesignImg/pawn2.png' /> 
            </div>
            
            <div className='pawn pawn-col3'>
            <img src='../Assets/DesignImg/pawn3.png' />
            </div>
        </div>

    </div>
  )
}
