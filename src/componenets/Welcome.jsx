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

export default Welcome;
