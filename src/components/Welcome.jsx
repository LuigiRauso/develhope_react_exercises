import React from "react";
import Age from "./Age";

function Welcome({ name = "User", age }) {
  return (
    <div className="welcome">
      <p>Welcome, {name} </p>
      <Age age={age} />
    </div>
  );
}

export default Welcome;
