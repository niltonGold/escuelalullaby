import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const AulaTexto = () => {

  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/hallydespacho');
  };


  return (
    <>
      <div className='AulaTexto-container'>
        
        <div className='aulaTexto-volver-siguiente-container'>
              <div className='aulaTexto-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='aulaTexto-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>
        
        <div className='aulaTexto-imagen-container'>
              <div className='aulaTexto-imagen-titulo'/>
        </div>
        
        <div className='aulaTexto-parrafo'>
            Espacios amplios y luminosos organizados por rincones y zonas
            específicas para satisfacer las necesidades de los niños en cada
            momento del día: cambiador, aseos y áreas de actividades. Todas las
            aulas, incluida la de psicomotricidad, cuentan con salida directa al patio.
        </div>
      
      </div>
    </>
  )
}
