import React, { useEffect, useInsertionEffect, useState } from "react";
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

  return (
    <>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment {increment}</button>
      <button onClick={handleDecrement}>Decrement {decrement}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Counter;
