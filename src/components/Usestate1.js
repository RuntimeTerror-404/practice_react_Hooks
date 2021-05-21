import React, { useState } from "react";
import "./designn.css";

const Usestate1 = () => {
  const [count, setCount] = useState(1);

  const IncNum = () => {
    setCount((count + 1));
  };

  return (
    <div className="design1">
      <h1> {count} </h1>

      <button className="design2" onClick={IncNum}>
        Click Me
      </button>
    </div>
  );
};

export default Usestate1;
