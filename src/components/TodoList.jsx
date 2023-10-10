import React, { useState } from "react";
import classes from "./TodoList.module.scss";

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleResetButton = () => {
    setItems([]);
  };

  const handleRemoveButton = (removedIndex) => {
    setItems(items.filter((_, index) => index !== removedIndex));
  };

  return (
    <>
      <div className={classes.todolistContainer}>
        <h2>TO DO LIST:</h2>
        <input
          type="text"
          placeholder="Type here.."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleButtonClick}>Add</button>
        <button onClick={handleResetButton}>Reset</button>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <br />
                <button onClick={() => handleRemoveButton(index)}>
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
