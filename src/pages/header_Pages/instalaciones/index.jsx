import React from 'react';
import './style.css';
import { InstalacionesTexto } from '../../../components/instalaciones_components/instalaciones_texto';
import { InstalacionesImagenes } from '../../../components/instalaciones_components/instalaciones_imagenes';
import { InstalacionesCirculosEnlaces } from '../../../components/instalaciones_components/instalaciones_circulos_enlaces';

export const Instalaciones = () => {
  return (
    <>
      <div className='instalaciones-container'>

          <InstalacionesTexto/>

          <InstalacionesImagenes/>
        
          <InstalacionesCirculosEnlaces />
        
      </div>
      
    </>
  )
  
}
