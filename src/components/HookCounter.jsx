import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [counter, setCount] = useState(initialValue);

  const handleCounterIncrement = () => setCount((prev) => prev + 1);
  const handleCounterDecrement = () => setCount((prev) => prev - 1);
  const handleCounterReset = () => setCount(initialValue);

  return {
    onCounter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}

function HookCounter() {
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

export default HookCounter;
