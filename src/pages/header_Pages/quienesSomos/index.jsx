import React from 'react';
import './style.css';
import { QuienesSomosImagenes } from '../../../components/quienessomos_componets/quienessomos_imagenes';
import { QuienesSomosTexto } from '../../../components/quienessomos_componets/quienessomos_texto';


export const QuienesSomos = () => {



  return (
    <>
      <div className='quienessomos-container'>
        
            <QuienesSomosTexto/>
        
            <QuienesSomosImagenes/>

      </div>
    </>
  )
  
}
