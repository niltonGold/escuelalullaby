// import './App.css';
// import { Header } from './components/Principal_Componets/header';
// import { Main } from './components/Principal_Componets/main';
// import { Footer } from './components/Principal_Componets/footer';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { useState } from 'react';
// import { QuienesSomos } from './pages/header_Pages/quienesSomos';
// import { EscuelaDePadres } from './pages/header_Pages/escuelaDePadres';
// import { ZonaPrivada } from './pages/header_Pages/zonaPrivada';
// import { Contacto } from './pages/header_Pages/Contacto';
// import { Instalaciones } from './pages/header_Pages/instalaciones';
// import { Proyecto } from './pages/header_Pages/proyecto';
// import { Ingles } from './pages/header_Pages/ingles';
// import { Equipo } from './pages/header_Pages/equipo';
// import { Fotos } from './pages/main_Pages/fotos';
// import { Pediatra } from './pages/main_Pages/pediatra';
// import { Noticias } from './pages/main_Pages/noticias';
// import { Decalogo } from './pages/main_Pages/decalogo';
// import { Nutricionista } from './pages/main_Pages/nutricionista';
// import { Excursiones } from './pages/main_Pages/excursiones';


// function App() {

// return (
//     <Router>
//       <div>
          
//           <div className="App">
//               <Header/>
//               <Routes>
//                   <Route path="/" element={<Main />} />
//                   <Route path="/escuelaDePadres" element={ <EscuelaDePadres/> } />
//                   <Route path="/zonaPrivada" element={ <ZonaPrivada/> } />
//                   <Route path="/contacto" element={ <Contacto/> } />
//                   <Route path="/quienessomos" element={<QuienesSomos />} />
//                   <Route path="/instalaciones" element={ <Instalaciones/> } />
//                   <Route path="/proyecto" element={ <Proyecto/> } />
//                   <Route path="/ingles" element={ <Ingles/> } />
//                   <Route path="/equipo" element={<Equipo />} />
                  
//                   {/* ---------------------------------------------- */}

//                   <Route path="/fotos" element={ <Fotos/> } />
//                   <Route path="/pediatra" element={ <Pediatra/> } />
//                   <Route path="/noticias" element={ <Noticias/> } />
//                   <Route path="/decalogo" element={ <Decalogo/> } />
//                   <Route path="/nutricionista" element={ <Nutricionista/> } />
//                   <Route path="/excursiones" element={ <Excursiones/> } />
//               </Routes>
//           </div>
          
//           <Footer /> 
      
//         </div>
//     </Router>
//   );
// }

// export default App;




import './App.css';
import { Header } from './components/Principal_Componets/header';
import { Main } from './components/Principal_Componets/main';
import { Footer } from './components/Principal_Componets/footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QuienesSomos } from './pages/header_Pages/quienesSomos';
import { EscuelaDePadres } from './pages/header_Pages/escuelaDePadres';
import { ZonaPrivada } from './pages/header_Pages/zonaPrivada';
import { Contacto } from './pages/header_Pages/Contacto';
import { Instalaciones } from './pages/header_Pages/instalaciones';
import { Proyecto } from './pages/header_Pages/proyecto';
import { Ingles } from './pages/header_Pages/ingles';
import { Equipo } from './pages/header_Pages/equipo';
import { Fotos } from './pages/inicio_Pages/fotos';
import { Pediatra } from './pages/inicio_Pages/pediatra';
import { Noticias } from './pages/inicio_Pages/noticias';
import { Decalogo } from './pages/inicio_Pages/decalogo';
import { Nutricionista } from './pages/inicio_Pages/nutricionista';
import { Excursiones } from './pages/inicio_Pages/excursiones';
import { Aulas } from './pages/instalaciones_Pages/aulas';
import { HallyDespacho } from './pages/instalaciones_Pages/hallydespacho';
import { Comedor } from './pages/instalaciones_Pages/comedor';
import { CocinaYlavanderia } from './pages/instalaciones_Pages/cocinaylavanderia';
import { HuertoeInvernadero } from './pages/instalaciones_Pages/huerto_e_invernadero';
import { SalonDeActos } from './pages/instalaciones_Pages/salon_de_actos';
import { Patios } from './pages/instalaciones_Pages/patios';

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/escuelaDePadres" element={<EscuelaDePadres />} />
            <Route path="/zonaPrivada" element={<ZonaPrivada />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/quienessomos" element={<QuienesSomos />} />
            <Route path="/instalaciones" element={<Instalaciones />} />
            <Route path="/proyecto" element={<Proyecto />} />
            <Route path="/ingles" element={<Ingles />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/pediatra" element={<Pediatra />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/decalogo" element={<Decalogo />} />
            <Route path="/nutricionista" element={<Nutricionista />} />
            <Route path="/excursiones" element={<Excursiones />} />
            <Route path="/aulas" element={ <Aulas/> } />
            <Route path="/hallydespacho" element={ <HallyDespacho/> } />
            <Route path="/comedor" element={ <Comedor/> } />
            <Route path="/cocinaylavanderia" element={ <CocinaYlavanderia/> } />
            <Route path="/patios" element={ <Patios/> } />
            <Route path="/huertoeinvernadero" element={ <HuertoeInvernadero/> } />
            <Route path="/salondeactos" element={ <SalonDeActos/> } />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
