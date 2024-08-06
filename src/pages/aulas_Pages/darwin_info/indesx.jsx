import React from 'react';
import './style.css';
import { DarwinTexto } from '../../../components/darwin_components/darwin_texto';
import { DarwinFotos } from '../../../components/darwin_components/darwin_fotos';

export const DarwinInfo = () => {
  return (
    <>
      <div className='DarwinInfo-container'>
        <DarwinTexto />
        <DarwinFotos />
      </div>  
    </>
  )
}
