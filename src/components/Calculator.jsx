// program for add two numbers....
import React, { useState } from "react";
import "./designn.css";

const Calculator = (e) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(num1 + num2);

  function doTotal() {
    setTotal(num1 + num2);
  }

  return (
    <div className="calculator">
      <span>
        <h1>"Add two numbers" </h1>
        <h3>Enter first number: </h3>
        <input
          type="number"
          value={num1}
          placeholder="0"
          onChange={(e) => setNum1(+e.target.value)}
        />
        <h3>Enter second number: </h3>
        <input
          type="number"
          value={num2}
          placeholder="0"
          onChange={(e) => setNum2(+e.target.value)}
        />
        <br />
        <br />
        <button className="btn" onClick={doTotal}>
          Add Them
        </button>
        <h2>Total: {total}</h2>
      </span>
    </div>
  );
};

export default Calculator;
