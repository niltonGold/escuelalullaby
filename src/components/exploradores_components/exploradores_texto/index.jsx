import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const ExploradoresTexto = () => {

  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/aulas');
  };

  const handleSiguiente = () => {
    navigate('/aventurerosinfo');
  };


  return (
    <>
      <div className='ExploradoresTexto-container'>
        
        <div className='exploradorestexto-volver-siguiente-container'>
              <div className='exploradorestexto-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='exploradorestexto-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>
        
        <div className='exploradorestexto-imagen-container'>
            <div>
                <div className='exploradorestexto-imagen-titulo' />
            </div>
            <div>
                <div className='exploradorestexto-imagen' />
            </div>
        </div>
        
        <div className='exploradorestexto-parrafo'>
              Aula de los Exploradores (0-1 año). Amplio espacio dedicado
              a los más pequeños de la escuela, distribuido en diferentes
              áreas: zona de aseo, juegos y actividades, descanso, lactancia y
              alimentación adaptada. Los exploradores cuentan con su propio
              patio de juegos al aire libre separado del resto de alumnos de
              la escuela. Además, los niños de 0-1 año contarán con dos responsables de aula.
        </div>
      
      </div>
    </>
  )
}