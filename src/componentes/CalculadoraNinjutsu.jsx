import { useState, useRef } from "react";
import React from "react";
import { MainContainer } from "./mainContainer";

export const CalculadoraNinjutsu = () => {
  const [fuerzaSeleccionada, setFuerzaSeleccionada] = useState("normal");
  const chakraEnemigoRef = useRef(null);
  const chakraPJRef = useRef(null);
  const resultadoRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(400);

  const calculadorDañoTecnica = () => {
    const chakraEnemigo = chakraEnemigoRef.current.value;
    const chakraPJ = chakraPJRef.current.value;

    let calculoTotalTecnica = 0; // Inicializa la variable antes de usarla

    if (fuerzaSeleccionada === "normal") {
      document.getElementById("chakraBloqueado").checked
        ? (calculoTotalTecnica = chakraEnemigo * 0.4)
        : (calculoTotalTecnica = chakraEnemigo * 1.5);
    } else if (fuerzaSeleccionada === "senjutsu") {
      const tecnicaSenjutsu = chakraEnemigo * 2;
      document.getElementById("chakraBloqueado").checked
        ? (calculoTotalTecnica = tecnicaSenjutsu * 0.4)
        : (calculoTotalTecnica = tecnicaSenjutsu);
    }

    let calculoFinalChakra = chakraPJ - calculoTotalTecnica;
    calculoFinalChakra = Math.max(calculoFinalChakra, 0);
    if (calculoFinalChakra < 0) calculoFinalChakra = 0;
    let totalDañoTexto = fuerzaSeleccionada === "senjutsu" ? "U/S" : "U/C";
    resultadoRef.current.textContent = `Tu chakra restante tras recibir ${calculoTotalTecnica} ${totalDañoTexto} es de: ${calculoFinalChakra} U/C.`;
  };

  return (
    <div>
      <MainContainer gap="8px">
        <h2>Calculadora Combate Ninjutsu</h2>
        <p className="descripcionGeneral">
          Actualmente el daño que se recibe dependerá de cuanto chakra te es
          golpeado. Ese nivel de poder que te golpea se aumenta un 50% de la
          base y el resultado final sería lo que te quita.
        </p>

        <input
          type="number"
          className="input1"
          id="inputTecnica"
          placeholder="Coloca el Chakra de la Técnica Recibida"
          ref={chakraEnemigoRef}
        />
        <input
          type="number"
          className="input2"
          id="inputReceptorTecnica"
          placeholder="Coloca tu Chakra Restante"
          ref={chakraPJRef}
        />

        <div className="radioBoxGeneral">
          <input
            className="inputRadioGeneral"
            type="radio"
            name="chakra"
            checked={fuerzaSeleccionada === "normal"}
            onChange={() => setFuerzaSeleccionada("normal")}
            id="chakraNormal"
          />
          <label htmlFor="chakraNormal" className="labelButtonGeneral">
            Normal
          </label>

          <input
            className="inputRadioGeneral"
            type="radio"
            name="chakra"
            checked={fuerzaSeleccionada === "senjutsu"}
            onChange={() => setFuerzaSeleccionada("senjutsu")}
            id="chakraSenjutsu"
          />
          <label htmlFor="chakraSenjutsu" className="labelButtonGeneral">
            Senjutsu
          </label>

          <input
            className="inputRadioGeneral"
            type="checkbox"
            name="#"
            id="chakraBloqueado"
          />
          <label htmlFor="chakraBloqueado" className="labelButtonGeneral">
            Bloqueado
          </label>
        </div>

        <input
          type="button"
          value="Calcular"
          className="buttonResultado"
          onClick={calculadorDañoTecnica}
        />
        <p className="resultadoParraf" ref={resultadoRef}></p>
      </MainContainer>
    </div>
  );
};
