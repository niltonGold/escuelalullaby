import { SalonDeActosFotos } from '../../../components/salondeactos_components/salondeactosFotos';
import { SalonDeActosTexto } from '../../../components/salondeactos_components/salondeactosTexto';
import './style.css';
import React from 'react'

export const SalonDeActos = () => {
  return (
    <>
      <div className='SalonDeActos-container'>
        <SalonDeActosTexto />
        <SalonDeActosFotos />
      </div>
    </>
  )
}