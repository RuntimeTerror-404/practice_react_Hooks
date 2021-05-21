import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();
const num1 = createContext();
const num2 = createContext();

function Usecontextt() {
  return (
    <React.Fragment>
      <FirstName.Provider value={"Mohit"}>
        <LastName.Provider value={"Parashar"}>
          <num1.Provider value={100}>
            <num2.Provider value={200}>
              <ComA />
            </num2.Provider>
          </num1.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </React.Fragment>
  );
}

export default Usecontextt;
export { FirstName, LastName, num1, num2 };
