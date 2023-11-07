import React, { useState } from 'react';
import './css/VerticalNavbar.css';

function VerticalNavbar(props) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className={`Vertical ${isNavbarVisible ? 'visible' : ''}`}>

      <div className="vertical-navbar">
        <img className='rubymenuimg' src="https://i.imgur.com/YfCz86S.png" alt="ruby-menu" />
        <button className="nav-item comTaijutsu" onClick={props.onComTaijutsu}>Combate con Taijutsu</button>
        <button className="nav-item comNinjutsu" onClick={props.onComNinjutsu}>Combate con Ninjutsu</button>
        <button className="nav-item sisResistencia" onClick={props.onSisResistencia}>Sistema de Resistencia</button>
        <button className="nav-item">Crear Carnet Ninja</button>
      </div>

      <button className="open-button" onClick={toggleNavbar}>
      ☰
      </button>

    </div>
  );
}

export default VerticalNavbar;
