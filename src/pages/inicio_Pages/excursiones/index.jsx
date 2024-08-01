import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Excursiones = () => {
  
  const navigate = useNavigate();

  const handleInicioClick = () => {
    navigate('/');
  };

  return (
      <>
        <div onClick={handleInicioClick} >&gt;&gt;Volver al Inicio</div>
        <div>Excursiones</div>
      </>
  )
}
