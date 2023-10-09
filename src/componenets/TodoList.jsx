import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setItems([...items, inputValue]);
    setInputValue(""); // This function will clear the input every time a Todo is added to the items array.
  };

  return (
    <>
      <h2>TO DO LIST:</h2>
      <input
        type="text"
        placeholder="Type here.."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleButtonClick}>Add</button>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default TodoList;
