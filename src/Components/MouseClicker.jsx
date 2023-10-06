import React from "react";

function MouseClicker(props) {
  const handleClick = (event) => {
    console.dir(event.target.name);
  };

  return (
    <>
      <button name={props.name} onClick={handleClick}>
        Click me!
      </button>
    </>
  );
}

export default MouseClicker;
