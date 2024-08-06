import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';


export const HallyDespachoTexto = () => {

  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/comedor');
  };

  return (
    <>
      <div className='Hallydespachotexo-container'>
          
            <div className='hallydespachotexo-volver-siguiente-container'>
                  <div className='hallydespachotexo-volver-siguiente' onClick={handleInstalacionesClick}>
                      &lt;&lt; Volver a Instalaciones
                  </div>
                  <div className='hallydespachotexo-volver-siguiente' onClick={handleSiguiente}>
                      Siguiente &gt;&gt; 
                  </div>
            </div>
            
            <div className='hallydespachotexo-imagen-container'>
                  <div className='hallydespachotexo-imagen-titulo'/>
            </div>
            
            <div className='hallydespachotexo-parrafo'>
                El hall es la zona de recepción de los niños y padres, el
                lugar de bienvenida a Lullaby. El despacho es uno de los puntos
                de reunión de la dirección y tutores con las familias de los niños,
                separado del hall con una cristalera para ofrecer la máxima
                transparencia y, a la vez, privacidad.
            </div>
        
      </div>
    </>
  )
}
