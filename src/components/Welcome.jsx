import React from "react";
import Age from "./Age";

function Welcome({ name = "User", age }) {
  return (
    <>
      <p>Welcome, {name}</p>
      {age > 18 && <Age age={age} />}
    </>
  );
}

export default Welcome;
