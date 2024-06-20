import React from 'react';
import './style.css';

export const Header = () => {
    return (
      <header>
        
        {/* Contenedor de el Logo de Lullaby y los 3 circulos con enlaces (Escuela de Padres, Zona Privada, Contacto) */}
        <div className='header-enlaces-container'>
            <div className='lullaby_logo' />

            {/* Contenedor de los 3 circulos del header */}
            <div className='header-enlaces'>
                <div className='header-escuelaDePadres logoRedondoHeader' />
                <div className='header-zonaPrivada logoRedondoHeader' />
                <div className='header-contacto logoRedondoHeader' />
            </div>
        </div>
        
        {/* Contenedor de los enlaces de navegacion (Inicio, Quiénes Somos, Instalacines, Inglés, Equipo) */}
        <div className='header-paginas-navegacion'>
   
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
                
        </div>
            
      </header>

  )
}
