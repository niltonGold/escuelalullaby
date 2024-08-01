import React from 'react';
import './style.css';

export const AulaFotos = () => {
  return (
    <>
      <div className='AulaFotos-container'>
        
        <div className='aulafotos-subcontainer'>

                <div className='aulafotos-titulo-imagen-info-container'>
                
                        <div className='aulafotos-titulo-container' >
                              <div className='aulafotos-titulo-exploradores aulafotos-titulo' />
                              <div className='aulafotos-titulo-edad'>(0-1 año)</div>
                        </div>
                        
                        <div className='aulafotos-nube' />
                        
                        <div className='aulafotos-imagen-container'>
                              <div className='aulafotos-imagen-exploradores aulafotos-imagen' />
                        </div>
                        
                        <div className='aulafotos-info'>+ Info.</div>
                
                </div>
          

                <div className='aulafotos-titulo-imagen-info-container'>
                      
                        <div className='aulafotos-titulo-container' >
                            <div className='aulafotos-titulo-aventureros aulafotos-titulo' />
                            <div className='aulafotos-titulo-edad'>(1-2 años)</div>
                        </div>
                        
                        <div className='aulafotos-nube' />
                        
                        <div className='aulafotos-imagen-container'>
                              <div className='aulafotos-imagen-aventureros aulafotos-imagen' />
                        </div>

                        {/* <div className='aulafotos-info-container'> */}
                                <div className='aulafotos-info'>+ Info.</div>
                        {/* </div> */}
                    
                </div>
        </div>
        
        <div className='aulafotos-subcontainer'>
          
                <div className='aulafotos-titulo-imagen-info-container'>
                
                        <div className='aulafotos-titulo-container' >
                            <div className='aulafotos-titulo-descubridores aulafotos-titulo' />
                            <div className='aulafotos-titulo-edad'>(2-3 años)</div>
                        </div>
                        
                        <div className='aulafotos-nube' />
                        
                        <div className='aulafotos-imagen-container'>
                              <div className='aulafotos-imagen-descubridores aulafotos-imagen' />
                        </div>
                      
                        <div className='aulafotos-info aulafotos-info-descubridores'>+ Info.</div>
          
                </div>
         
                <div className='aulafotos-titulo-imagen-info-container'>
            
                        <div className='aulafotos-titulo-container' >
                            <div className='aulafotos-titulo-darwin aulafotos-titulo' />
                            <div className='aulafotos-titulo-edad'>(Psicomotricidad)</div>
                        </div>
                  
                        <div className='aulafotos-nube'/>
                        
                        <div className='aulafotos-imagen-container'>
                              <div className='aulafotos-imagen-darwin aulafotos-imagen' />
                        </div>
                        
                        <div className='aulafotos-info'>+ Info.</div>
                
                </div>
        
        </div>
      
      </div>
    </>
  )
}
