import React from "react";

// SOLUTION 1:
function Welcome({ name }) {
  return (
    <>
      <p>Welcome, {name}</p>
    </>
  );
}

// SOLUTION 2:
// function Welcome(props) {
//   return (
//     <>
//       <p>Welcome, {props.name}</p>
//     </>
//   );
// }

export default Welcome;
