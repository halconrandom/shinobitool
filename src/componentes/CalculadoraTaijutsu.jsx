import React, { useState, useRef } from "react";
import { MainContainer } from "./mainContainer";

export const CalculadoraTaijutsu = () => {
  const [fuerzaSeleccionada, setFuerzaSeleccionada] = useState("normal");
  const fuerzaEnemigoref = useRef(null);
  const fuerzaPJref = useRef(null);
  const resultadoRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(400);

  const calculardanio = () => {
    const fuerzaPJ = fuerzaPJref.current.value;
    const fuerzaEnemigo = fuerzaEnemigoref.current.value;

    if (fuerzaSeleccionada === "normal") {
      return (fuerzaEnemigo - fuerzaPJ) * 2;
    } else if (fuerzaSeleccionada === "50") {
      return (fuerzaEnemigo - fuerzaPJ) * 1.5;
    } else if (fuerzaSeleccionada === "90") {
      return (fuerzaEnemigo - fuerzaPJ) * 1.25;
    } else {
      return 0;
    }
  };

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

  return (
    <div>
      <MainContainer gap="8px" customHeight={containerHeight}>
        <h2>Calculadora Combate Taijutsu</h2>
        <h3 className="descripcionGeneral">
          Los golpes y/o patadas dados con fuerza son multiplicados x2. El
          calculo se realiza restando la fuerza del golpe a la fuerza tuya,
          posteriormente añadiendo la multiplicacion para definir cuanto daño te
          realizo.
        </h3>

        <input
          className="input1"
          type="number"
          placeholder="Coloca la fuerza del ataque recibido"
          name="InputFuerza"
          id="inputFuerza"
          ref={fuerzaEnemigoref}
        />
        <input
          className="input2"
          type="number"
          placeholder="Coloca la fuerza que posea tu personaje"
          name="InputReceptor"
          id="inputReceptor"
          ref={fuerzaPJref}
        />

        <div className="radioBoxGeneral">
          <input
            className="inputRadioGeneral"
            type="radio"
            name="fuerza"
            id="radiofuerzanormal"
            checked={fuerzaSeleccionada === "normal"}
            onChange={() => setFuerzaSeleccionada("normal")}
          />
          <label className="labelButtonGeneral" htmlFor="radiofuerzanormal">
            Normal
          </label>

          <input
            className="inputRadioGeneral"
            type="radio"
            name="fuerza"
            id="radiofuerza50"
            checked={fuerzaSeleccionada === "50"}
            onChange={() => setFuerzaSeleccionada("50")}
          />
          <label className="labelButtonGeneral" htmlFor="radiofuerza50">
            Taijutsu 50%
          </label>

          <input
            className="inputRadioGeneral"
            type="radio"
            name="fuerza"
            id="radiofuerza90"
            checked={fuerzaSeleccionada === "90"}
            onChange={() => setFuerzaSeleccionada("90")}
          />
          <label className="labelButtonGeneral" htmlFor="radiofuerza90">
            Taijutsu 90%
          </label>
        </div>
        <input
          className="buttonResultado"
          type="button"
          value="Calcular"
          onClick={calcularTotalFuerza}
        />
        <p
          className="resultadoParraf"
          id="resultadoFuerza"
          ref={resultadoRef}
        ></p>
      </MainContainer>
    </div>
  );
};
