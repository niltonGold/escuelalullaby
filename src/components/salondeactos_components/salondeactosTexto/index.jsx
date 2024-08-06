import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const SalonDeActosTexto = () => {

 const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };


  return (
      <div className='SalonDeActosTexto-container'>
        
        <div className='salondeactostexto-volver-container'>
              <div className='salondeactostexto-volver' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
        </div>
        
        <div className='salondeactostexto-imagen-container'>
              <div className='salondeactostexto-imagen-titulo'/>
        </div>
        
        <div className='salondeactostexto-parrafo'>
            El aula de psicomotricidad y el comedor son
            dos espacios modulables que se convierten en un
            luminoso y espacioso Salón de Actos destinado a
            reuniones, fiestas y eventos especiales que tienen
            lugar en el centro a lo largo de todo el año.
        </div>
      
      </div>
  )
}
