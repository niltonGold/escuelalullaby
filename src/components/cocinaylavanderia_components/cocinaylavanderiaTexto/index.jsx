import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const CocinayLavanderiaTexto = () => {

  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/patios');
  };


  return (
      <div className='CocinayLavanderiaTexto-container'>
          
        <div className='cocinaylavanderiatexto-volver-siguiente-container'>
              <div className='cocinaylavanderiatexto-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='cocinaylavanderiatexto-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>
        
        <div className='cocinaylavanderiatexto-imagen-container'>
              <div className='cocinaylavanderiatexto-imagen-titulo'/>
        </div>
        
        <div className='cocinaylavanderiatexto-parrafo'>
            La escuela dispone de una cocina visible desde el hall, donde diariamente se
            preparan los menús de los niños, servidos por una empresa de confianza, con
            máxima calidad en sus productos (proveedores de primeras marcas) y servicios,
            teniendo siempre presente todas las alergias e intolerancias alimentarias, así
            como dietas especiales por enfermedad. La comida es tradicional (sin frituras),
            rica en variedad y sabores, con la finalidad de que los niños conozcan la diversidad
            de alimentos que nos ofrece la dieta mediterránea y aprendan los hábitos saludables
            relacionados con la alimentación. Las familias tienen a su disposición a nuestra
            nutricionista, que resolverá todas las cuestiones y dudas que puedan surgir en relación
            a este tema. El centro cuenta además con una lavandería interna (baberos y ropa de cama).
        </div>
      
      </div>
  )
}
