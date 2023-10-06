import React from "react";
import smile from "/smile.png";

function MouseClicker(props) {
  const handleClick = (event) => {
    console.log(event.currentTarget.name);
  };

  const handleImageClick = (event) => {
    console.log(event.target.src);
  };

  return (
    <>
      <button name={props.name} onClick={handleClick}>
        Click me!
        <img src={smile} alt="icon" onClick={handleImageClick} />
      </button>
    </>
  );
}

export default MouseClicker;

/* 
Q: Does the name attribute of the button still get printed to the console when the image is clicked? Why?
A: Yes, the name attribute of the button is printed when the image is clicked. This happens due to event bubbling in React, where an event on a child element also triggers on its parent elements.
*/
