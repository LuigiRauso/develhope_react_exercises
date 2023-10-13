import React from "react";
import Age from "./Age";

function Welcome({ name = "User", age }) {
  return (
    <>
      <p>Welcome, {name}</p>
      {age > 18 && age < 65 ? <Age age={age} /> : null}
    </>
  );
}

export default Welcome;
