import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Header_lullaby_logo = () => {

  const navigate = useNavigate();

  const handleInicioClick = () => {
    navigate('/');
  };

  return (
      <>
        <div className='lullaby_logo' onClick={handleInicioClick} />
      </>
  )
}