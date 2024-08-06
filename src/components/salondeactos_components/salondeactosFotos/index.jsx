import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import imagen1 from '../../../images/salondeactos/salondeactos_imagen1.jpg';
import imagen2 from '../../../images/salondeactos/salondeactos_imagen2.jpg';

export const SalonDeActosFotos = () => {

 const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const images = [
    imagen1,
    imagen2,
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
      <div className='SalonDeActosFotos-container'>
        
            <div
            className={`salondeactosfotos-imagenes-centro ${fadeIn ? 'fade-in' : 'fade-out'}`}
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
            
            <div className='salondeactosfotos-volver-container'>
                  <div className='salondeactosfotos-volver' onClick={handleInstalacionesClick}>
                      &lt;&lt; Volver a Instalaciones
                  </div>
            </div>

      </div>
  )
}
