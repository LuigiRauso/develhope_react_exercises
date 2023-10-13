import React from "react";
import Age from "./Age";

function Welcome({ name = "User", age }) {
  return (
    <>
      <p>Welcome, {name} </p>
      <Age age={age} />
    </>
  );
}

export default Welcome;
