import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const HuertoeInvernaderoTexto = () => {

  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/salondeactos');
  };


  return (
      <div className='HuertoeInvernaderoTexto-container'>
        
        <div className='huertoeinvernaderotexto-volver-siguiente-container'>
              <div className='huertoeinvernaderotexto-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='huertoeinvernaderotexto-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>
        
        <div className='huertoeinvernaderotexto-imagen-container'>
              <div className='huertoeinvernaderotexto-imagen-titulo'/>
        </div>
        
        <div className='huertoeinvernaderotexto-parrafo'>
              Se encuentran en el patio de actividades dirigidas.
              Se trata de una zona espaciosa donde los niños aprenden
              a cultivar las plantas, así como a acercarse al concepto
              de preservar y cuidar el medio ambiente y el ecosistema.
        </div>
      
      </div>
  )
}
