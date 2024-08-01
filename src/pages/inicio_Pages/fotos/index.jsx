import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Fotos = () => {

  const navigate = useNavigate();

  const handleInicioClickk = () => {
    navigate('/');
  };

  return (
      <>
        <div className='fotos-main' onClick={handleInicioClickk} >&gt;&gt;Volver al Inicio</div>
        <div>Fotos</div>
      </>
  )
}