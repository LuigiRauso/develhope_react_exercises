import React from "react";

function Welcome({ name = "User", age }) {
  return (
    <>
      <p>Welcome, {name}</p>
      <p>Your age is {age}</p>
    </>
  );
}

export default Welcome;