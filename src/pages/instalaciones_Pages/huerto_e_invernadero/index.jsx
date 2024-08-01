import { HuertoeInvernaderoFotos } from '../../../components/huertoeinvernadero_components/huertoeinvernaderoFotos';
import { HuertoeInvernaderoTexto } from '../../../components/huertoeinvernadero_components/huertoeinvernaderoTexto';
import './style.css';
import React from 'react'

export const HuertoeInvernadero = () => {
  return (
    <>
      <div className='HuertoeInvernadero-container'>
        <HuertoeInvernaderoTexto />
        <HuertoeInvernaderoFotos />
      </div>
    </>
  )
}