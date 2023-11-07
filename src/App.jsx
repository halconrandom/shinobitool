import React, { useState, useRef } from "react";
import "./App.css";
import { MainContainer } from "./componentes/mainContainer";
import { LogoImage } from "./componentes/LogoImage";
import VerticalNavbar from "./componentes/VerticalNavbar";
import { ButtonGeneral } from "./componentes/ButtonGeneral";

function App() {
  const [showCombateTaijutsu, setShowCombateTaijutsu] = useState(false);
  const [showCombateNinjutsu, setShowCombateNinjutsu] = useState(false);
  const [showSistemaResistencia, setShowSistemaResistencia] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const combateTaijutsu = () => {

    if (showCombateTaijutsu === true){
      return;
    }else{
    setShowCombateTaijutsu(true);
    setShowCombateNinjutsu(false);
    setShowSistemaResistencia(false);
    setContainerHeight(400)
    console.log('Combate de Taijutsu iniciado');
  }
}
  const combateNinjutsu = () => {

    if (showCombateNinjutsu === true) {
      return;
    }else{    
    setShowCombateTaijutsu(false);
    setShowCombateNinjutsu(true);
    setShowSistemaResistencia(false);
    console.log('Combate de Ninjutsu iniciado');
    }
  }
  const sistemaResistencia = () => {
    if (showSistemaResistencia === true) {
      return;
    }else{   
    setShowCombateTaijutsu(false);
    setShowCombateNinjutsu(false);
    setShowSistemaResistencia(true);
    console.log('Sistema de Resistencia iniciado');
    }
  }


  // Funcion para que se pueda calcular el daño de la fuerza previamente a dar el resultado. 

  const [fuerzaSeleccionada, setFuerzaSeleccionada] = useState ('normal');
  const fuerzaEnemigoref = useRef(null);
  const fuerzaPJref = useRef(null);
  const resultadoRef = useRef(null);


  const calcularTotalFuerza = () => {
    const fuerzaPJValor = parseInt(fuerzaPJref.current.value);
    const fuerzaEnemigoValor = parseInt(fuerzaEnemigoref.current.value);
    setContainerHeight(containerHeight + 150);


      const totalDanioFuerza = calculardanio(fuerzaPJValor, fuerzaEnemigoValor);
      const dañoTotal = Math.max(totalDanioFuerza, 0);

      resultadoRef.current.textContent = `El daño total a tu personaje tras recibir ${fuerzaEnemigoValor}KG de fuerza es de: ${dañoTotal} KG de daño total.`;

      // Aquí puedes guardar los valores en el almacenamiento local si es necesario.
      // localStorage.setItem("repoInputReceptor", fuerzaPJValor);
      // localStorage.setItem("repoInputFuerzaEnemiga", fuerzaEnemigoValor);
    };

  const calculardanio = () => {

    const fuerzaPJ = fuerzaPJref.current.value;
    const fuerzaEnemigo = fuerzaEnemigoref.current.value;
    
      if (fuerzaSeleccionada === 'normal'){
        return (fuerzaEnemigo - fuerzaPJ) * 2;
      }else if (fuerzaSeleccionada === '50'){
        return (fuerzaEnemigo - fuerzaPJ) * 1.5;
      }else if (fuerzaSeleccionada === '90'){
        return (fuerzaEnemigo - fuerzaPJ) * 1.25;
      }else {
        return 0;
      }

  }








  return (
    <div className="App">
      <VerticalNavbar
        onComTaijutsu={combateTaijutsu}
        onComNinjutsu={combateNinjutsu}
        onSisResistencia={sistemaResistencia}
      />

      <LogoImage />
      {showCombateTaijutsu && (
        <MainContainer gap="8px" customHeight={containerHeight}>
          <h2>Calculadora Combate Taijutsu</h2>
          <h3 className="descripcionGeneral">Los golpes y/o patadas dados con fuerza son multiplicados x2. El calculo se realiza restando la fuerza del golpe a la fuerza tuya, posteriormente añadiendo la multiplicacion para definir cuanto daño te realizo.</h3>
          <input className="input1" type="number" placeholder="Coloca la fuerza del ataque recibido" name="InputFuerza" id="inputFuerza" ref={fuerzaEnemigoref}/>
          <input className="input2" type="number" placeholder="Coloca la fuerza que posea tu personaje" name="InputReceptor" id="inputReceptor" ref={fuerzaPJref} />

          <div className="radioBoxFuerza">
            <input className="inputRadioFuerza" type="radio" name="fuerza" id="radiofuerzanormal" checked={fuerzaSeleccionada === 'normal'} onChange={()=> setFuerzaSeleccionada('normal')}/>
            <label className="labelButtonFuerza" htmlFor="radiofuerzanormal">Normal</label>

            <input className="inputRadioFuerza" type="radio" name="fuerza" id="radiofuerza50" checked={fuerzaSeleccionada === '50'} onChange={()=> setFuerzaSeleccionada('50')} />
            <label className="labelButtonFuerza" htmlFor="radiofuerza50">Taijutsu 50%</label>
            
            <input className="inputRadioFuerza" type="radio" name="fuerza" id="radiofuerza90" checked={fuerzaSeleccionada === '90'} onChange={()=> setFuerzaSeleccionada('90')}/>
            <label className="labelButtonFuerza" htmlFor="radiofuerza90">Taijutsu 90%</label>
          </div>
          <input type="button" value="calcularDanioTaijutsu" onClick={calcularTotalFuerza} />
            <p className="resultadoFuerzaP" id="resultadoFuerza" ref={resultadoRef}></p>

        </MainContainer>
      )}
      {showCombateNinjutsu && (
        <MainContainer gap="8px">
          <h2>Calculadora Combate Ninjutsu</h2>
          {/* Otro contenido relacionado con Combate Ninjutsu */}
        </MainContainer>
      )}
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
