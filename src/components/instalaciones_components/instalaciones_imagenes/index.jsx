import React, { useEffect, useState } from 'react';
import './style.css';
import Instalaciones1 from '../../../images/Instalaciones/InstalacionesImagen1.jpg';
import Instalaciones2 from '../../../images/Instalaciones/InstalacionesImagen2.jpg';
import Instalaciones3 from '../../../images/Instalaciones/InstalacionesImagen3.jpg';
import Instalaciones4 from '../../../images/Instalaciones/InstalacionesImagen4.jpg';
import Instalaciones5 from '../../../images/Instalaciones/InstalacionesImagen5.jpg';
import Instalaciones6 from '../../../images/Instalaciones/InstalacionesImagen6.jpg';
import Instalaciones7 from '../../../images/Instalaciones/InstalacionesImagen7.jpg';
import Instalaciones8 from '../../../images/Instalaciones/InstalacionesImagen8.jpg';
import Instalaciones9 from '../../../images/Instalaciones/InstalacionesImagen9.jpg';
import Instalaciones10 from '../../../images/Instalaciones/InstalacionesImagen10.jpg';
import Instalaciones11 from '../../../images/Instalaciones/InstalacionesImagen11.jpg';
import Instalaciones12 from '../../../images/Instalaciones/InstalacionesImagen12.jpg';
import Instalaciones13 from '../../../images/Instalaciones/InstalacionesImagen13.jpg';


export const InstalacionesImagenes = () => {

    const images = [
        Instalaciones1,
        Instalaciones2,
        Instalaciones3,
        Instalaciones4,
        Instalaciones5,
        Instalaciones6,
        Instalaciones7,
        Instalaciones8,
        Instalaciones9,
        Instalaciones10,
        Instalaciones11,
        Instalaciones12,
        Instalaciones13,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeIn(true);
        }, 1000); // Duración de la transición de salida antes de cambiar la imagen
        }, 3000); // Intervalo de 5 segundos para incluir el tiempo de fade in y el tiempo de visualización

        return () => clearInterval(intervalId);
    }, [images.length]);
    
  return (
      <>
        <div className='instalaciones-imagenes-container'>
                <div
                    className={`instalaciones-imagenes ${fadeIn ? 'fade-in' : 'fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                />
        </div>
      </>
  )
}
