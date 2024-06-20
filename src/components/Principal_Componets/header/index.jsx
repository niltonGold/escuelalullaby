import React from 'react';
import './style.css';
import { Header_lullaby_logo } from '../../header_componets/header_lullaby_logo';
import { Header_enlaces_redondos } from '../../header_componets/header_enlaces_redondos';
import { Header_paginas_navegacion_subcontainer } from '../../header_componets/header_paginas_navegacion_subcontainer';

export const Header = () => {
    return (
      <header>
        
                {/* Contenedor de el Logo de Lullaby y los 3 circulos con enlaces (Escuela de Padres, Zona Privada, Contacto) */}
                <div className='header-enlaces-container'>
                    
                        {/* Contenedor del logo lullby del header */}
                        <Header_lullaby_logo/>

                        {/* Contenedor de los 3 circulos del header */}
                        <Header_enlaces_redondos />
                        
                </div>
                
                {/* Contenedor de los enlaces de navegacion (Inicio, Quiénes Somos, Instalacines, Inglés, Equipo) */}
                <div className='header-paginas-navegacion'>
        
                        {/* Subcontenedor de las paginas de navegación del header*/}         
                        <Header_paginas_navegacion_subcontainer/>
                        
                </div>
            
      </header>

  )
}
