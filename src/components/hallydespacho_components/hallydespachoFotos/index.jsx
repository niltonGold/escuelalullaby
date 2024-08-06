import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const HallyDespachoFotos = () => {
  
  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/comedor');
  };


  return (
    <>
      <div className='HallyDespachoFotos-container'>
        
        <div className='hallydespachofotos-imagen' />
        
        <div className='hallydespachofotos-volver-siguiente-container'>
              <div className='hallydespachofotos-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='hallydespachofotos-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>

      </div>
    </>
  )
}
