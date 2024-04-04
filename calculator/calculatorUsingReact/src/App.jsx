import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import React, { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "CE") {
      // ... (handle backspace logic)
    } else {
      let newDisplayValue;
      if (buttonText === "+" || buttonText === "-") {
        // Add line break before operators
        newDisplayValue = calVal + "\n" + buttonText;
      } else {
        newDisplayValue = calVal + buttonText;
      }
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
