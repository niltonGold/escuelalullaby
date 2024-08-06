import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import imagen1 from '../../../images/comedor/comedor_imagen1.jpg';
import imagen2 from '../../../images/comedor/comedor_imagen2.jpg';
import imagen3 from '../../../images/comedor/comedor_imagen3.jpg';
import imagen4 from '../../../images/comedor/comedor_imagen4.jpg';



export const ComedorFotos = () => {
  
  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/cocinaylavanderia');
  };

  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
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
      <div className='ComedorFotos-container'>
        
            <div
            className={`comedorfotos-imagenes-centro ${fadeIn ? 'fade-in' : 'fade-out'}`}
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
            
            <div className='comedorfotos-volver-siguiente-container'>
                  <div className='comedorfotos-volver-siguiente' onClick={handleInstalacionesClick}>
                      &lt;&lt; Volver a Instalaciones
                  </div>
                  <div className='comedorfotos-volver-siguiente' onClick={handleSiguiente}>
                      Siguiente &gt;&gt; 
                  </div>
            </div>

      </div>
  )
}
