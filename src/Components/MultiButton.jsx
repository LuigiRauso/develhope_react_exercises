import React from "react";

function MultiButton() {
  const handleClick = (event) => {
    console.log(event.currentTarget.name);
  };

  return (
    <>
      <button name="one" onClick={handleClick}>
        Button 1
      </button>
      <button name="two" onClick={handleClick}>
        Button 2
      </button>
      <button name="three" onClick={handleClick}>
        Button 3
      </button>
    </>
  );
}

export default MultiButton;
