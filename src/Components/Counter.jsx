import React, { useState } from "react";

function Counter({ initialValue, increment }) {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + increment);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Increment {increment}</button>
    </>
  );
}

export default Counter;
