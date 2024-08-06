import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const PatiosTexto = () => {
  
  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/huertoeinvernadero');
  };


  return (
      <div className='PatiosTexto-container'>
        
        <div className='patiostexto-volver-siguiente-container'>
              <div className='patiostexto-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='patiostexto-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>
        
        <div className='patiostexto-imagen-container'>
              <div className='patiostexto-imagen-titulo'/>
        </div>
        
        <div className='patiostexto-parrafo'>
              
              <div>
                    La escuela cuenta con dos grandes zonas exteriores, con acceso directo desde las aulas. 
              </div>
              
              <div>
                    El patio de juegos, con más de 350 metros cuadrados, dispone de
                    césped artificial, suelo de caucho, arenero y columpios
                    adaptados a las edades de los niños. Los niños de 0 a 1 año juegan
                    y disfrutan al aire libre en un área exclusiva dentro de este espacio.
              </div>
              
              <div>
                    El patio de actividades, al que se accede desde el aula de psicomotricidad,
                    con más de 500 metros cuadrados, es de césped natural destinado a actividades
                    dirigidas y donde se sitúa un huerto e invernadero y el Circuito de Educación Vial.
              </div>
        
        </div>
      
      </div>
  )
}
