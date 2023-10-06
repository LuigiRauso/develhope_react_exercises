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


/* 
Q: When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? Why?
A: The parameter should be a function. This ensures that the most recent state is used when updating, which is particularly important when multiple state updates are performed simultaneously. 
*/