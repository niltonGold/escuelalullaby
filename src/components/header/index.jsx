import React from 'react';
import './style.css';

export const Header = () => {
    return (
      <header>
        <div className='header-enlaces-container'>
            <div className='lullaby_logo' />
            <div className='header-enlaces'>
                <div className='header-escuelaDePadres logoRedondoHeader' />
                <div className='header-zonaPrivada logoRedondoHeader' />
                <div className='header-contacto logoRedondoHeader' />
            </div>
        </div>
        
        <div className='header-paginas-navegacion'>

            <div className='header-navegacion-link-container'>
                <div className='header-navegacion-incio-logo logoNavegacion' />
                <div className='header-navegacion-texto'>Inicio</div>
            </div>
          
            <div className='header-navegacion-link-container'>
                <div className='header-navegacion-quienesSomos-logo logoNavegacion' />
                <div className='header-navegacion-texto'>Quiénes somos</div>
            </div>
          
            <div className='header-navegacion-link-container'>
                <div className='header-navegacion-instalaciones-logo logoNavegacion' />
                <div className='header-navegacion-texto'>Instalaciones</div>
            </div>

            <div className='header-navegacion-link-container'>
                <div className='header-navegacion-proyectoLullaby-logo logoNavegacion' />
                <div className='header-navegacion-texto'>Proyecto Lullaby</div>
            </div>

            <div className='header-navegacion-link-container'>
                <div className='header-navegacion-ingles-logo logoNavegacion' />
                <div className='header-navegacion-texto'>Inglés</div>
            </div>

            <div className='header-navegacion-link-container'>
                <div className='header-navegacion-equipo-logo logoNavegacion' />
                <div className='header-navegacion-texto'>Equipo</div>  
            </div> 
            
        </div>
      </header>

  )
}
