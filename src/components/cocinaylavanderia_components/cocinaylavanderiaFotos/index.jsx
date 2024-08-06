import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const CocinayLavanderiaFotos = () => {

  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/patios');
  };



  return (
    <>
      <div className='CocinayLavanderiaFotos-container'>
        
        <div className='cocinaylavanderiafotos-imagen' />
        
        <div className='cocinaylavanderiafotos-volver-siguiente-container'>
              <div className='cocinaylavanderiafotos-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='cocinaylavanderiafotos-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>

      </div>
    </>
  )
}
