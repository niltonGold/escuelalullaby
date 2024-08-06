import React from 'react';
import './style.css';
import { ExploradoresTexto } from '../../../components/exploradores_components/exploradores_texto';
import { ExploradoresFotos } from '../../../components/exploradores_components/exploradores_fotos';

export const ExploradoresInfo = () => {
  return (
    <>
      <div className='ExploradoresInfo-container'>
        <ExploradoresTexto />
        <ExploradoresFotos />
      </div>  
    </>
  )
}
