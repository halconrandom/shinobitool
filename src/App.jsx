import React, { useState, useRef } from "react";
import "./App.css";
import { MainContainer } from "./componentes/mainContainer";
import { LogoImage } from "./componentes/LogoImage";
import VerticalNavbar from "./componentes/VerticalNavbar";
import { ButtonGeneral } from "./componentes/ButtonGeneral";
import { CalculadoraTaijutsu } from "./componentes/CalculadoraTaijutsu";
import { CalculadoraNinjutsu } from "./componentes/CalculadoraNinjutsu";

function App() {
  const [showCombateTaijutsu, setShowCombateTaijutsu] = useState(false);
  const [showCombateNinjutsu, setShowCombateNinjutsu] = useState(false);
  const [showSistemaResistencia, setShowSistemaResistencia] = useState(false);
  const [showLandingContainer, setShowLandingContainer] = useState(true);
  const [containerHeight, setContainerHeight] = useState(0);

  const combateTaijutsu = () => {
    if (showCombateTaijutsu === true) {
      return;
    } else {
      setShowCombateTaijutsu(true);
      setShowCombateNinjutsu(false);
      setShowSistemaResistencia(false);
      setShowLandingContainer(false);
      console.log("Combate de Taijutsu iniciado");
    }
  };
  const combateNinjutsu = () => {
    if (showCombateNinjutsu === true) {
      return;
    } else {
      setShowCombateTaijutsu(false);
      setShowCombateNinjutsu(true);
      setShowSistemaResistencia(false);
      setShowLandingContainer(false);
      console.log("Combate de Ninjutsu iniciado");
    }
  };
  const sistemaResistencia = () => {
    if (showSistemaResistencia === true) {
      return;
    } else {
      setShowCombateTaijutsu(false);
      setShowCombateNinjutsu(false);
      setShowSistemaResistencia(true);
      setShowLandingContainer(false);
      console.log("Sistema de Resistencia iniciado");
    }
  };

  // Funcion para que se pueda calcular el daño de la fuerza previamente a dar el resultado.

  return (
    <div className="App">
      <VerticalNavbar
        onComTaijutsu={combateTaijutsu}
        onComNinjutsu={combateNinjutsu}
        onSisResistencia={sistemaResistencia}
      />

      <LogoImage />

      {showLandingContainer && (
        <MainContainer>
          <h2>Shinobi Tool Beta 4.0</h2>
          <p className="descripcionGeneral">
            Para comenzar a utilizar cualquiera de las calculadoras, presiona en
            alguno de los botones de abajo.
          </p>

          <button onClick={combateTaijutsu} type="button">
            Calculadora Taijutsu
          </button>
          <button onClick={combateNinjutsu} type="button">
            Calculadora Ninjutsu
          </button>
          <button onClick={sistemaResistencia} type="button">
            Sistema de Resistencia
          </button>
        </MainContainer>
      )}

      {showCombateTaijutsu && <CalculadoraTaijutsu />}
      {showCombateNinjutsu && <CalculadoraNinjutsu />}
      {showSistemaResistencia && (
        <MainContainer gap="8px">
          <h2>Sistema de Resistencia</h2>
          {/* Otro contenido relacionado con Sistema de Resistencia */}
        </MainContainer>
      )}

      <footer>
        Shinobi Tool es una herramienta creada para poder facilitar el rol en
        general dentro del grupo oficial de Shinobi Legacy &copy;
      </footer>
    </div>
  );
}

export default App;
