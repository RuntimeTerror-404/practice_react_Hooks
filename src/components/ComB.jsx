import React, { useContext } from "react";
import "./designn.css";
import { FirstName, LastName, num1, num2 } from "./Usecontextt";

const ComB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  const n1 = useContext(num1);
  const n2 = useContext(num2);

  return (
    <div className="heading1">
      <h1>
        My name is{" "}
        <mark className="mark">
          {fname} {lname}
        </mark>
      </h1>
      <h2>
        The sum would be {n1} {n2}
      </h2>
    </div>
  );
};

export default ComB;
