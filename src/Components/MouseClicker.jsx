import React from "react";
import smile from "/smile.png";

function MouseClicker(props) {
  const handleClick = (event) => {
    console.log(event.currentTarget.name);
  };

  const handleImageClick = (event) => {
    console.log(event.target.src);
    event.stopPropagation();
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
Q: How can you prevent the name attribute of the button from being printed to the console when the image is clicked?
A: You can prevent this by using event.stopPropagation() in the image's click event handler.
*/
