import './style.css';
import { useNavigate } from 'react-router-dom';

export const Header_paginas_navegacion_subcontainer = () => {

  const navigate = useNavigate();
  
  const handleInicioClick = () => {
      navigate('/');
    };

  const handleQuienesSomosClick = () => {
    navigate('/quienessomos');
  };

  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

    const handleProyectoClick = () => {
    navigate('/proyecto');
  };

    const handleInglesClick = () => {
    navigate('/ingles');
  };

    const handleEquipoClick = () => {
    navigate('/equipo');
  };

  
  return (
      <>
         <div className='header-paginas-navegacion-subcontainer'>
                <div className='header-navegacion-link-container header-pointer'>
                    <div className='header-navegacion-incio-logo' />
                    <div className='header-navegacion-texto' onClick={handleInicioClick} >Inicio</div>
                </div>
            
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide'/>          
                  <div className='header-navegacion-texto header-pointer' onClick={handleQuienesSomosClick} >Quiénes Somos</div>

                </div>
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' /> 
                    <div className='header-navegacion-texto header-pointer' onClick={handleInstalacionesClick} >Instalaciones</div>        
                </div>

                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' />
                    <div className='header-navegacion-texto header-pointer' onClick={handleProyectoClick} >Proyecto</div>        
                </div>
                
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' /> 
                    <div className='header-navegacion-texto header-pointer' onClick={handleInglesClick} >Inglés</div>
                </div>
                            
                <div className='header-navegacion-link-container'>
                    <div className='header-navegacion-incio-logo header-logo-hide' /> 
                    <div className='header-navegacion-texto header-pointer' onClick={handleEquipoClick} >Equipo</div>
                </div>
        </div>
      </>
  )
}
