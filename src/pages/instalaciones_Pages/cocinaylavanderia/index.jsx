import { CocinayLavanderiaFotos } from '../../../components/cocinaylavanderia_components/cocinaylavanderiaFotos';
import { CocinayLavanderiaTexto } from '../../../components/cocinaylavanderia_components/cocinaylavanderiaTexto';
import './style.css';
import React from 'react'

export const CocinaYlavanderia = () => {
  return (
    <>
      <div className='CocinayLavanderia-container'>
        <CocinayLavanderiaTexto />
        <CocinayLavanderiaFotos />
      </div>
    </>
  )
}
