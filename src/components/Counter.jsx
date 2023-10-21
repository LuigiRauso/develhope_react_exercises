import React from "react";
import useCounter from "../useCounter";

function Counter() {
  const { onCounter, onIncrement, onDecrement, onReset } = useCounter(0);

  return (
    <div>
      <h2>Good job, you've counted to: {onCounter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Counter;
