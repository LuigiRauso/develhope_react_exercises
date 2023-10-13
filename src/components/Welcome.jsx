import React from "react";

// SOLUTION 1:
function Welcome({ name = "User" }) {
  return (
    <>
      <p>Welcome, {name}</p>
    </>
  );
}

// SOLUTION 2:
// function Welcome(props) {
//   const name = props.name || "Guest";
//   return (
//     <>
//       <p>Welcome, {name}</p>
//     </>
//   );
// }

/* 
Q: What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop?
A: If no name prop is passed to the Welcome component, it will display "User" by default. Yes, you can set a default value for the name prop using ES6's default parameters feature.
*/

export default Welcome;
