import React, { useEffect, useState } from 'react';
import './style.css';
import imagen1 from '../../../images/main/main-imagen1.jpg';
import imagen2 from '../../../images/main/main-imagen2.jpg';
import imagen3 from '../../../images/main/main-imagen3.jpg';
import imagen4 from '../../../images/main/main-imagen4.jpg';
import imagen5 from '../../../images/main/main-imagen5.jpg';
import imagen6 from '../../../images/main/main-imagen6.jpg';
import imagen7 from '../../../images/main/main-imagen7.jpg';
import imagen8 from '../../../images/main/main-imagen8.jpg';
import imagen9 from '../../../images/main/main-imagen9.jpg';
import imagen10 from '../../../images/main/main-imagen10.jpg';
import imagen11 from '../../../images/main/main-imagen11.jpg';
import imagen12 from '../../../images/main/main-imagen12.jpg';
import imagen13 from '../../../images/main/main-imagen13.jpg';
import imagen14 from '../../../images/main/main-imagen14.jpg';
import imagen15 from '../../../images/main/main-imagen15.jpg';
import imagen16 from '../../../images/main/main-imagen16.jpg';
import imagen17 from '../../../images/main/main-imagen17.jpg';
import imagen18 from '../../../images/main/main-imagen18.jpg';



export const Main_container1_fotos_enlaces = () => {

  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
    imagen11,
    imagen12,
    imagen13,
    imagen14,
    imagen15,
    imagen16,
    imagen17,
    imagen18,
  ];

  const [currentIndex, setCurrentIndex] = useState( 0 );
  const [fadeIn, setFadeIn] = useState(true);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 2000); // Duración de la transición de salida antes de cambiar la imagen
    }, 3000); // Intervalo de 4 segundos para incluir el tiempo de fade in y el tiempo de visualización

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
      <>
        <div className='main-container-1_fotos_enlaces'>

                    {/* Contenedor izquierdo de los circulos fotos, pediatra y noticias */}
                    <div className='main-enlaces-izquierda'>
                        <div className='main-enlaces-fotos main-logo' />
                        <div className='main-enlaces-pediatra main-logo' />
                        <div className='main-enlaces-noticias main-logo' />
                    </div>

              
                     {/* Contenedor de las fotos cambiantes*/}
      <div
        className={`main-imagenes-centro ${fadeIn ? 'fade-in' : 'fade-out'}`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
                    
              
                    {/* Contenedor derecho de los circulos decálogo, nutricionista y excursiones*/}
                    <div className='main-enlaces-derecha'>
                        <div className='main-enlaces-decalogo main-logo' />
                        <div className='main-enlaces-nutricionista main-logo' />
                        <div className='main-enlaces-excursiones main-logo' />
                    </div>
              
        </div>
      </>
  )
}
