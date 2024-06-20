import React from 'react';
import './style.css';

export const Header_paginas_navegacion_subcontainer = () => {
  return (
      <>
         <div className='header-paginas-navegacion-subcontainer'>
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo' />
                    <div className='header-navegacion-texto'>Inicio</div>
                </div>
            
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' />          
                    <div className='header-navegacion-texto'>Quiénes Somos</div>
                </div>
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' /> 
                    <div className='header-navegacion-texto'>Instalaciones</div>        
                </div>

                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' />
                    <div className='header-navegacion-texto'>Proyectos</div>        
                </div>
                
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' /> 
                    <div className='header-navegacion-texto'>Inglés</div>
                </div>
                            
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' /> 
                    <div className='header-navegacion-texto'>Equipo</div>
                </div>
        </div>
      </>
  )
}
