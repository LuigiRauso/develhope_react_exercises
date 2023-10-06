import React from "react";
import smile from "/smile.png";

function MouseClicker(props) {
  const handleClick = (event) => {
    console.log(event.currentTarget.name);
  };

  return (
    <>
      <button name={props.name} onClick={handleClick}>
        Click me!
        <img src={smile} alt="icon" />
      </button>
    </>
  );
}

export default MouseClicker;
