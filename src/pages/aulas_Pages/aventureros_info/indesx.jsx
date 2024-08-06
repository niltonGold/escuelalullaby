import React from 'react';
import './style.css';
import { AventurerosTexto } from '../../../components/aventureros_components/aventureros_texto';
import { AventurerosFotos } from '../../../components/aventureros_components/aventureros_fotos';

export const AventurerosInfo = () => {
  return (
    <>
      <div className='AventurerosInfo-container'>
        <AventurerosTexto />
        <AventurerosFotos />
      </div>  
    </>
  )
}