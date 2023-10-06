import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue, increment }) {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + increment);
  };

  return (
    <>
      <CounterDisplay count={counter} />
      <button onClick={handleClick}>Increment {increment}</button>
    </>
  );
}

export default Counter;
