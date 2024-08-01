import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const InstalacionesCirculosEnlaces = () => {

  const navigate = useNavigate();
  
  const handleAulas = () => {
    navigate('/aulas');
  };

  const handleHallyDespacho = () => {
    navigate('/hallydespacho');
  };

  const handleComedor = () => {
    navigate('/comedor');
  };

  const handleCocinaYlavanderia = () => {
    navigate('/cocinaylavanderia');
  };

  const handlePatios = () => {
    navigate('/patios');
  };

  const handleHuertoeInvernadero = () => {
    navigate('/huertoeinvernadero');
  };

    const handleSalonDeActos = () => {
    navigate('/salondeactos');
  };


  return (
      <>
        <div className='Instalaciones-circulos-enlaces-container'>
              <div className='instalaciones-circulos'>
                  <div className='instalaciones-aulas instalacionesLogo'onClick={handleAulas}/>
                  <div className='instalaciones-hallYdespacho instalacionesLogo' onClick={handleHallyDespacho} />
                  <div className='instalaciones-comedor instalacionesLogo'onClick={handleComedor}/>
              </div>
              <div className='instalaciones-circulos'>
                  <div className='instalaciones-cocinaYlavanderia instalacionesLogo' onClick={handleCocinaYlavanderia}/>
                  <div className='instalaciones-patios instalacionesLogo' onClick={handlePatios}/>
                  <div className='instalaciones-huertoEinvernadero instalacionesLogo' onClick={handleHuertoeInvernadero}/>
                  <div className='instalaciones-salonDeActos instalacionesLogo'onClick={handleSalonDeActos}/>
              </div>
        </div>
      
      </>
  )
}
