import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Header_paginas_navegacion_subcontainer = () => {
  const navigate = useNavigate();
  const [instalacionesDropdownVisible, setInstalacionesDropdownVisible] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  const dropdownRef = useRef(null);

  const handleInicioClick = () => {
    navigate('/');
  };

  const handleQuienesSomosClick = () => {
    navigate('/quienessomos');
  };

  const handleInstalacionesClick = () => {
    navigate('/instalaciones');
    if (firstClick) {
      setFirstClick(false);
    } else {
      setInstalacionesDropdownVisible(!instalacionesDropdownVisible);
    }
  };

  const handleProyectoClick = () => {
    navigate('/proyecto');
  };

  const handleInglesClick = () => {
    navigate('/ingles');
  };

  const handleEquipoClick = () => {
    navigate('/equipo');
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setInstalacionesDropdownVisible(false);
    }
  };

  const handleOptionClick = (path) => {
    navigate(path);
    setInstalacionesDropdownVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className='header-paginas-navegacion-subcontainer'>
        <div className='header-navegacion-link-container header-pointer'>
          <div className='header-navegacion-incio-logo' />
          <div className='header-navegacion-texto' onClick={handleInicioClick}>Inicio</div>
        </div>

        <div className='header-navegacion-link-container'>
          <div className='header-navegacion-incio-logo header-logo-hide' />
          <div className='header-navegacion-texto header-pointer' onClick={handleQuienesSomosClick}>Quiénes Somos</div>
        </div>

        <div className='header-navegacion-link-container' style={{ position: 'relative' }} ref={dropdownRef} onMouseEnter={() => !firstClick && setInstalacionesDropdownVisible(true)} onMouseLeave={() => setInstalacionesDropdownVisible(false)}>
          <div className='header-navegacion-incio-logo header-logo-hide' />
          <div className='header-navegacion-texto header-pointer' onClick={handleInstalacionesClick}>
            Instalaciones
          </div>
          <div className={`instalaciones-dropdown ${instalacionesDropdownVisible ? 'visible' : ''}`}>
            <div onClick={() => handleOptionClick('/instalaciones/option1')} className='header-navegacion-instalaciones-texto'>Aulas</div>
            <div onClick={() => handleOptionClick('/instalaciones/option2')} className='header-navegacion-instalaciones-texto'>Hall y Despacho</div>
            <div onClick={() => handleOptionClick('/instalaciones/option3')} className='header-navegacion-instalaciones-texto'>Comedor</div>
            <div onClick={() => handleOptionClick('/instalaciones/option1')} className='header-navegacion-instalaciones-texto'>Cocina y Lavandería</div>
            <div onClick={() => handleOptionClick('/instalaciones/option2')} className='header-navegacion-instalaciones-texto'>Patios</div>
            <div onClick={() => handleOptionClick('/instalaciones/option3')} className='header-navegacion-instalaciones-texto'>Huertos</div>
            <div onClick={() => handleOptionClick('/instalaciones/option3')} className='header-navegacion-instalaciones-texto'>Salón de Actos</div>
          </div>
        </div>

        <div className='header-navegacion-link-container'>
          <div className='header-navegacion-incio-logo header-logo-hide' />
          <div className='header-navegacion-texto header-pointer' onClick={handleProyectoClick}>Proyecto</div>
        </div>

        <div className='header-navegacion-link-container'>
          <div className='header-navegacion-incio-logo header-logo-hide' />
          <div className='header-navegacion-texto header-pointer' onClick={handleInglesClick}>Inglés</div>
        </div>

        <div className='header-navegacion-link-container'>
          <div className='header-navegacion-incio-logo header-logo-hide' />
          <div className='header-navegacion-texto header-pointer' onClick={handleEquipoClick}>Equipo</div>
        </div>
      </div>
    </>
  );
}
