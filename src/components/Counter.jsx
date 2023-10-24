import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue, increment, decrement }) {
  const [counter, setCounter] = useState(initialValue);
  useEffect(() => {
    console.log(`The current value of counter is: ${counter}`);
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prev) => prev + increment);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - decrement);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  const counterContainerStyle = {
    backgroundColor: "azure",
    padding: "2rem",
    textAlign: "center",
    border: "3px solid dodgerblue",
    borderRadius: "10px",
  };

  const counterButtonsStyle = {
    marginRight: "0.5rem",
    border: "0px",
    borderRadius: "10px",
    height: "2rem",
    backgroundColor: "deepskyblue",
    boxShadow: "2px 2px 8px deepskyblue",
  };

  return (
    <>
      <div style={counterContainerStyle}>
        <CounterDisplay count={counter} />
        <button onClick={handleIncrement} style={counterButtonsStyle}>
          Increment {increment}
        </button>
        <button onClick={handleDecrement} style={counterButtonsStyle}>
          Decrement {decrement}
        </button>
        <button onClick={handleReset} style={counterButtonsStyle}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
