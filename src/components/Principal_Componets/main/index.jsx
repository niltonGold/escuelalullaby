import React from 'react';
import './style.css';
import { Main_container1_fotos_enlaces } from '../../main_componets/main_container1_fotos_enlaces';
import { Main_container2_contacto } from '../../main_componets/main_container2_contacto';
import { Main_container3_libro_notas } from '../../main_componets/main_container3_libro_notas';


export const Main = () => {


    
    return (
        <main>

            {/* Contenedor de los circulos(fotos, pediatra, noticias, decálogo, nutricionista, excursiones) y fotos cambiantes*/}
            <Main_container1_fotos_enlaces/>

            {/* Contenedor de los datos de contacto*/}
            <Main_container2_contacto/>

            <Main_container3_libro_notas />
            
        </main>    
  )
}
