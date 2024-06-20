import React from 'react';
import './style.css';

export const Main_container2_contacto = () => {
  return (
      <>
        <div className='main-container-2_contacto'>
                    
                    <div className='main-contacto-container'>
                        <b className='main-contacto-texto'>Dirección :</b>
                        <div className='main-contacto-texto'>C/Salónica 43 Las Rozas de Madrid</div>
                    </div>
                    <div className='main-contacto-container'>
                        <b className='main-contacto-texto'>Teléfono :</b>
                        <div className='main-contacto-texto-telefono'>681 285 932</div>
                    </div>
            
                    <div className='main-contacto-container'>
                        <b className='main-contacto-texto'>Mail :</b>
                        <div className='main-contacto-texto'>info@escuelalullaby.es</div>
                    </div>
                    
                    <div className='main-contacto-container-redes-sociales'>
                        <div className='main-contacto-instagram main-redSocial'/>
                        <div className='main-contacto-x main-redSocial'/>
                        <div className='main-contacto-facebook main-redSocial'/>
                    </div>
                   
        </div>
      </>
  )
}
