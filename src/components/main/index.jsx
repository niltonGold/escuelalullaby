import React from 'react';
import './style.css';

export const Main = () => {
    return (
        <main>

            <div className='main-container-1'>
                    <div className='main-enlaces-izquierda'>
                        <div className='main-enlaces-fotos main-logo' />
                        <div className='main-enlaces-pediatra main-logo' />
                        <div className='main-enlaces-noticias main-logo' />
                    </div>

                    <div className='main-imagenes-centro' />
                    
                    <div className='main-enlaces-derecha'>
                        <div className='main-enlaces-decalogo main-logo' />
                        <div className='main-enlaces-nutricionista main-logo' />
                        <div className='main-enlaces-excursiones main-logo' />
                    </div>
            </div>

            <div className='main-container-2'>
                    <div className='main-contacto-container'>
                        <b className='main-contacto-texto-subtitulo'>Dirección :</b>
                        <div className='main-contacto-texto'>C/ Salónica, 43, 28232 Las Rozas de Madrid</div>
                    </div>
                    <div className='main-contacto-container'>
                        <b className='main-contacto-texto-subtitulo'>Teléfono :</b>
                        <div className='main-contacto-texto'>681 285 932</div>
                    </div>
                    <div className='main-contacto-container'>
                        <b className='main-contacto-texto-subtitulo'>Mail :</b>
                        <div className='main-contacto-texto'>info@escuelalullaby.es</div>
                    </div>
                    
                    <div className='main-contacto-container-redes-sociales'>
                        <div className='main-contacto-x redSocial'/>
                        <div className='main-contacto-facebook redSocial'/>
                    </div>
            </div>

            <div className='main-container-3'>
                
                <div className='main-container-3-fondo-cuaderno-texto'>
                    <div className='main-container-3-parrafo'>
                        <h1>Ven a Conocernos</h1>
                        <div>
                            La Escuela Infantil Lullaby es un centro de
                            nueva construcción de 300 metros cuadrados
                            en una sola planta, grandes espacios
                            iluminados con luz natural todo el año y
                            dotado con los mejores equipamientos.
                            <b>Y más de 1000 metros cuadrados de jardines
                            y patios al aire libre</b>, diferenciados por edades.
                        </div>
                        <div>
                            ¿Te lo vas a perder?
                        </div>
                        <div>
                            <b>Llámanos al 681 285 932.</b>
                        </div>
                    </div>
                    
                    <div className='main-container-linea-divisora'/>
                    
                    <div className='main-container-3-parrafo'>
                        <h1>Aprendizaje por Descubrimiento</h1>
                        <div>
                            <b>¿Eres un pequeño explorador,
                            un trepidante aventurero o un
                            curioso descubridor?</b>
                        </div>
                        <div>
                            En Lullaby, nuestros niños aprenden y conocen
                            su entorno, sorprendiéndose con cada pequeño
                            descubrimiento, aventurándose en caminos que
                            antes no habían transitado, explorando cada
                            centímetro del mundo que les rodea. Pero,
                            sobre todo, en Lullaby <b>nuestros niños son
                            felices</b> porque experimentan ese mundo en un
                            ambiente de cariño y seguridad.
                        </div>
                        <div>
                            <i>¿Te apuntas?</i> <b>Ven con nosotros.</b>
                        </div>
                    </div>
                </div>
            
            </div>

        </main>    
  )
}
