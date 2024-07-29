import React from 'react';
import './style.css';

export const InstalacionesCirculosEnlaces = () => {
  return (
      <>
        <div className='Instalaciones-circulos-enlaces-container'>
              <div className='instalaciones-circulos'>
                  <div className='instalaciones-aulas instalacionesLogo'/>
                  <div className='instalaciones-hallYdespacho instalacionesLogo' />
                  <div className='instalaciones-comedor instalacionesLogo'/>
              </div>
              <div className='instalaciones-circulos'>
                  <div className='instalaciones-cocinaYlavanderia instalacionesLogo' />
                  <div className='instalaciones-patios instalacionesLogo' />
                  <div className='instalaciones-huertoEinvernadero instalacionesLogo' />
                  <div className='instalaciones-salonDeActos instalacionesLogo'/>
              </div>
        </div>
      
      </>
  )
}
