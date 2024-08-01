import { AulaFotos } from '../../../components/aula_components/aulaFotos';
import { AulaTexto } from '../../../components/aula_components/aulaTexto';
import './style.css';
import React from 'react'

export const Aulas = () => {
  return (
    <>
      <div className='Aulas-container'>
        <AulaTexto/>
        <AulaFotos />
      </div>
    </>
  )
}
