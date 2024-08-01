import { HallyDespachoFotos } from '../../../components/hallydespacho_components/hallydespachoFotos';
import { HallyDespachoTexto } from '../../../components/hallydespacho_components/hallydespachoTexo';
import './style.css';
import React from 'react'

export const HallyDespacho = () => {
  return (
    <>
      <div className='HallyDespacho-container'>
        <HallyDespachoTexto />
        <HallyDespachoFotos />
      </div>  
    </>
  )
}