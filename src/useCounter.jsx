import { useState } from "react";

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

export default useCounter;
