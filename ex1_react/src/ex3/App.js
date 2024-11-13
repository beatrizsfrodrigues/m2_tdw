import React, { useState } from "react";
import "../ex3.css";

function App() {
  const [money, setMoney] = useState(1000);

  function addMoney(deposit) {
    setMoney((prevMoney) => {
      return prevMoney + deposit;
    });
  }

  function removeMoney(withdrawal) {
    setMoney((prevMoney) => {
      return prevMoney - withdrawal;
    });
  }

  function add() {
    const inputValue = document.getElementById("inputMoney").value;
    const depositAmount = Number(inputValue);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      addMoney(depositAmount);
      document.getElementById("inputMoney").value = "";
    } else {
      console.log("Please enter a valid number.");
    }
  }

  function remove() {
    const inputValue = document.getElementById("inputMoney").value;
    const withdrawalAmount = Number(inputValue);
    if (
      !isNaN(withdrawalAmount) &&
      withdrawalAmount > 0 &&
      withdrawalAmount <= money
    ) {
      removeMoney(withdrawalAmount);
      document.getElementById("inputMoney").value = "";
    } else {
      console.log("Please enter a valid number.");
    }
  }

  return (
    <div className="multibanco">
      <h1>Máquina Multibanco</h1>
      <h2>Saldo Atual: {money}€</h2>
      <div>
        <input type="number" id="inputMoney"></input>
        <button className="btn" onClick={add}>
          Depositar
        </button>
        <button className="btn" onClick={remove}>
          Levantar
        </button>
      </div>
    </div>
  );
}

export default App;