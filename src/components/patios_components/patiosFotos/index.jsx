import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import imagen1 from '../../../images/patios/patios_imagen1.jpg';
import imagen2 from '../../../images/patios/patios_imagen2.jpg';
import imagen3 from '../../../images/patios/patios_imagen3.jpg';
import imagen4 from '../../../images/patios/patios_imagen4.jpg';
import imagen5 from '../../../images/patios/patios_imagen5.jpg';
import imagen6 from '../../../images/patios/patios_imagen6.jpg';
import imagen7 from '../../../images/patios/patios_imagen7.jpg';
import imagen8 from '../../../images/patios/patios_imagen8.jpg';
import imagen9 from '../../../images/patios/patios_imagen9.jpg';

export const PatiosFotos = () => {


  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/huertoeinvernadero');
  };

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
  ];

  const [currentIndex, setCurrentIndex] = useState( 0 );
  
  const [fadeIn, setFadeIn] = useState( true );


  useEffect(() => {
  const intervalId = setInterval(() => {
        setFadeIn(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFadeIn(true);
        }, 1000);
      }, 3000); 

      return () => clearInterval(intervalId);
  }, [images.length] );




  return (
      <div className='PatiosFotos-container'>
        
            <div
            className={`patiosfotos-imagenes-centro ${fadeIn ? 'fade-in' : 'fade-out'}`}
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
            
            <div className='patiosfotos-volver-siguiente-container'>
                  <div className='patiosfotos-volver-siguiente' onClick={handleInstalacionesClick}>
                      &lt;&lt; Volver a Instalaciones
                  </div>
                  <div className='patiosfotos-volver-siguiente' onClick={handleSiguiente}>
                      Siguiente &gt;&gt; 
                  </div>
            </div>

      </div>
  )
}
