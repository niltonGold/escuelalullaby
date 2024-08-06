import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';


export const AulaFotos = () => {

    const navigate = useNavigate();

    const handleInstalacionesClick = () => {
        navigate('/instalaciones');
    };

    const handleSiguiente = () => {
        navigate('/hallydespacho');
    };
  


    const handleZonaExploradoresInfo = () => {
        navigate('/exploraoresinfo');
    };

    const handleZonaAventurerosInfo = () => {
        navigate('/aventurerosinfo');
    };

    const handleZonaDescubridoresInfo = () => {
        navigate('/descubridoresinfo');
    };

    const handleZonaDarwinInfo = () => {
        navigate('/darwininfo');
    };

  return (
    <>
      <div className='AulaFotos-container'>
        

        <div className='aulafotos-subcontainer'>

                <div className='aulafotos-titulo-imagen-info-container'>
                
                        <div className='aulafotos-titulo-edad-container' >
                            <div className='aulafotos-titulo-exploradores aulafotos-titulo-espacio' />
                            <div className='aulafotos-titulo-edad'>(0-1 año)</div>
                        </div>
            
                        <div className='aulafotos-nube-container aulafotos-nube-container-explorador'>
                            <div className='aulafotos-nube' />
                        </div>
            
                        <div className='aulafotos-imagen-container'>
                            <div className='aulafotos-imagen-exploradores aulafotos-imagen' />
                        </div>
                        
                        <div className='aulafotos-info-container aulafotos-info-exploradores'>
                            <div className='aulafotos-info' onClick={handleZonaExploradoresInfo}>+ Info.</div>
                        </div>
                
                </div>
          

                <div className='aulafotos-titulo-imagen-info-container'>
                      
                        <div className='aulafotos-titulo-edad-container' >
                            <div className='aulafotos-titulo-aventureros aulafotos-titulo-espacio' />
                            <div className='aulafotos-titulo-edad'>(1-2 años)</div>
                        </div>
            
                        <div className='aulafotos-nube-container aulafotos-nube-container-aventureros'>
                            <div className='aulafotos-nube' />
                        </div>
                        
                        <div className='aulafotos-imagen-container'>
                            <div className='aulafotos-imagen-aventureros aulafotos-imagen' />
                        </div>

                        <div className='aulafotos-info-container aulafotos-info-aventureros'>
                            <div className='aulafotos-info' onClick={handleZonaAventurerosInfo}>+ Info.</div>
                        </div>
                    
                </div>
        </div>
        
        <div className='aulafotos-subcontainer aulafotos-subcontainer-descubridores-darwin'>
          
                <div className='aulafotos-titulo-imagen-info-container'>
                
                        <div className='aulafotos-titulo-edad-container' >
                            <div className='aulafotos-titulo-descubridores aulafotos-titulo-espacio' />
                            <div className='aulafotos-titulo-edad'>(2-3 años)</div>
                        </div>
                        
                        <div className='aulafotos-nube-container aulafotos-nube-container-descubridores'>
                            <div className='aulafotos-nube' />
                        </div>
                        
                        <div className='aulafotos-imagen-container'>
                            <div className='aulafotos-imagen-descubridores aulafotos-imagen' />
                        </div>
                      
                        <div className='aulafotos-info-container aulafotos-info-descubridores'>
                            <div className='aulafotos-info' onClick={handleZonaDescubridoresInfo}>+ Info.</div>
                        </div>
          
                </div>
         
                <div className='aulafotos-titulo-imagen-info-container'>
            
                        <div className='aulafotos-titulo-edad-container' >
                            <div className='aulafotos-titulo-darwin aulafotos-titulo-espacio' />
                            <div className='aulafotos-titulo-edad'>(Psicomotricidad)</div>
                        </div>
            
                        <div className='aulafotos-nube-container aulafotos-nube-container-darwin'>
                            <div className='aulafotos-nube'/>
                        </div>
                        
                        <div className='aulafotos-imagen-container'>
                            <div className='aulafotos-imagen-darwin aulafotos-imagen' />
                        </div>
                        
                        <div className='aulafotos-info-container aulafotos-info-darwin'>
                            <div className='aulafotos-info' onClick={handleZonaDarwinInfo}>+ Info.</div>
                        </div>
                
                </div>
        
        </div>
  <div className='aulafotos-volver-siguiente-container'>
              <div className='aulafotos-volver-siguiente' onClick={handleInstalacionesClick}>
                  &lt;&lt; Volver a Instalaciones
              </div>
              <div className='aulafotos-volver-siguiente' onClick={handleSiguiente}>
                  Siguiente &gt;&gt; 
              </div>
        </div> 

      </div>
    </>
  )
}
