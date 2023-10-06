import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default Counter;
