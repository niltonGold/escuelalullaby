import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const ComedorTexto = () => {

  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/cocinaylavanderia');
  };


  return (
      <div className='ComedorTexto-container'>
        
        <div className='comedortexto-volver-siguiente-container'>
              <div className='comedortexto-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='comedortexto-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>
        
        <div className='comedortexto-imagen-container'>
              <div className='comedortexto-imagen-titulo'/>
        </div>
        
        <div className='comedortexto-parrafo'>
            Lullaby es una de las pocas escuelas infantiles de la zona que
            ofrece un espacio exclusivamente destinado a la alimentación,
            consiguiendo así que las aulas no tengan más función que la propia
            educación de los niños, manteniéndolas como espacios agradables,
            limpios y ausente olores. El comedor cuenta con un sistema de filtración
            de olores y renovación de aire específico para la actividad que se
            desarrolla en este espacio: la alimentación.
        </div>
      
      </div>
  )
}
