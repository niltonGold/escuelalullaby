import React from 'react';
import './style.css';
import { DescubridoresTexto } from '../../../components/descubridores_components/descubridores_fotos';
import { DescubridoresFotos } from '../../../components/descubridores_components/descubridores_texto';

export const DescubridoresInfo = () => {
  return (
    <>
      <div className='DescubridoresInfo-container'>
        <DescubridoresTexto />
        <DescubridoresFotos />
      </div>  
    </>
  )
}
