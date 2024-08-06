import { AulaFotos } from '../../../components/aula_components/aulaFotos';
import { AulaTexto } from '../../../components/aula_components/aulaTexto';
import './style.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Aulas = () => {
  //   const navigate = useNavigate();
  
  // const handleInstalacionesClick = () => {
  //   navigate('/instalaciones');
  // };

  // const handleSiguiente = () => {
  //   navigate('/hallydespacho');
  // };
  return (
    <>
      <div className='Aulas-container'>
        <AulaTexto/>
        <AulaFotos />
        {/* <div className='aulafotos-volver-siguiente-container'>
              <div className='aulafotos-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='aulafotos-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div>     */}
      </div>
    </>
  )
}
