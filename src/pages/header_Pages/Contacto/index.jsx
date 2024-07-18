import React from 'react';
import './style.css';
import MapComponent from '../../../components/contacto_components/mapa_de_lullaby';
import FormularioContacto from '../../../components/contacto_components/formulario_contacto';


export const Contacto = () => {
    
    const apiKey = 'AIzaSyCXX7QMLcIV-micuRVlUJVqPBFjC5G4Gxc';
    const address = 'C. Salonica, 43, 28232 Las Rozas de Madrid, Madrid, España';

  return (
    <>
        <div className='contacto-container'>
        
            <div className='contacto-titulo'>
                Escuela Infantil Lullaby
            </div>
        
            <div className='contacto-parrafo'>
                La escuela permanece abierta de 7:00 a 19:00 horas,
                siendo su jornada escolar de 9:00 a 17:00 horas.
                Lullaby ofrece diferentes posibilidades horarias.
                Pregúntanos y os informaremos sobre las que mejor
                se adaptan a vuestras necesidades laborales y personales.
            </div>
        
            <div className='contacto-parrafo'>
                Teléfono: <b className='contacto-telefono'>681 285 932</b>
            </div>
            <div className='contacto-parrafo'>
                Dirección: C/ Salónica, 43. 28232 Las Rozas de Madrid (Madrid)
            </div>
        
            <div className='contacto-parrafo'>
                E-mail: <b className='contacto-email'>info@escuelalullaby.es</b>
            </div>
            
            <div className='contacto-mapa'>
                  <MapComponent apiKey={apiKey} address={address} />
            </div>

            <FormularioContacto/>
        </div>
    </>

      

         

  )
}
