import { ComedorFotos } from '../../../components/comedor_components/comedorFotos';
import { ComedorTexto } from '../../../components/comedor_components/comedorTexto';
import './style.css';
import React from 'react'

export const Comedor = () => {
  return (
    <>
      <div className='Comedor-container'>
        <ComedorTexto />
        <ComedorFotos />
      </div>
    </>
  )
}