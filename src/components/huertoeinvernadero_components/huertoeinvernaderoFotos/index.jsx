import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import imagen1 from '../../../images/huertoeinvernadero/huertoeinvernadero_imagen1.jpg';
import imagen2 from '../../../images/huertoeinvernadero/huertoeinvernadero_imagen2.jpg';

export const HuertoeInvernaderoFotos = () => {
  

  const navigate = useNavigate();
  
  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
  };

  const handleSiguiente = () => {
    navigate('/salondeactos');
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
      <div className='HuertoeInvernaderoFotos-container'>
        
            <div
            className={`huertoeinvernaderofotos-imagenes-centro ${fadeIn ? 'fade-in' : 'fade-out'}`}
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
            
            <div className='huertoeinvernaderofotos-volver-siguiente-container'>
                  <div className='huertoeinvernaderofotos-volver-siguiente' onClick={handleInstalacionesClick}>
                      &lt;&lt; Volver a Instalaciones
                  </div>
                  <div className='huertoeinvernaderofotos-volver-siguiente' onClick={handleSiguiente}>
                      Siguiente &gt;&gt; 
                  </div>
            </div>

      </div>
  )
}
