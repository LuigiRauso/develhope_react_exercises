import React, { useEffect, useRef, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue, increment, decrement }) {
  const [counter, setCounter] = useState(initialValue);
  const currDirection = useRef(null);
  const prevDirection = useRef(null);

  const handleIncrement = () => {
    setCounter((prev) => prev + increment);
    currDirection.current = "up";
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - decrement);
    currDirection.current = "down";
  };

  const handleReset = () => {
    setCounter(initialValue);
    currDirection.current = null;
  };

  useEffect(() => {
    console.log(`The current value of counter is: ${counter}`);
    if (currDirection.current !== prevDirection.current) {
      console.log(`The counter went ${currDirection.current}`);
      prevDirection.current = currDirection.current;
    }
  }, [counter]);

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
