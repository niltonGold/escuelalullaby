import React, { useEffect, useState } from 'react';
import './style.css';
import QuienesSomosimagen1 from '../../../images/quienesSomos/quienes_somos_img1.jpg';
import QuienesSomosimagen2 from '../../../images/quienesSomos/quienes_somos_img2.jpg';

export const QuienesSomosImagenes = () => {

  const images = [
      QuienesSomosimagen1,
      QuienesSomosimagen2,
  ];

  const [currentIndex, setCurrentIndex] = useState( 0 );
  
  const [fadeIn, setFadeIn] = useState(true);

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
      <>
        <div className='quienessomos-imagnes-container'>
        
              <div  className={`quienessomos-imagenes ${fadeIn ? 'fade-in' : 'fade-out'}`}  style={{ backgroundImage: `url(${images[currentIndex]})` }}  />
        
        </div>
      </>
  )
}
