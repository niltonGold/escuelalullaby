import { PatiosFotos } from '../../../components/patios_components/patiosFotos';
import { PatiosTexto } from '../../../components/patios_components/patiosTexto';
import './style.css';
import React from 'react'

export const Patios = () => {
  return (
    <>
      <div className='Patios-container'>
        <PatiosTexto />
        <PatiosFotos />
      </div>
    </>
  )
}