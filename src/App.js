import "./styles.css";
import React, { useState } from "react";

const initialResult = "";

export default function App() {
  const [result, setResult] = useState(initialResult);
  return (
    <>
      <div className="bodyContainer">
        <div className="buttonContainer">
          <button onClick={() => handleDieRoll(4)}>1d4</button>
          <button onClick={() => handleDieRoll(6)}>1d6</button>
          <button onClick={() => handleDieRoll(8)}>1d8</button>
          <button onClick={() => handleDieRoll(10)}>1d10</button>
          <button onClick={() => handleDieRoll(12)}>1d12</button>
          <button onClick={() => handleDieRoll(20)}>1d20</button>
          <button onClick={() => handleDieRoll(100)}>1d100</button>
        </div>
        <div id="result" className="container">
          {result}
        </div>
      </div>
    </>
  );

  function handleDieRoll(dieSides) {
    let result = RollADie(dieSides);
    console.log(result);
    setResult(result);
  }

  function RollADie(max) {
    return Math.floor(Math.random() * max) + 1;
  }
}
