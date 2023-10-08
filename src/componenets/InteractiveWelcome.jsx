import React, { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleInputNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleInputNameChange} />
      <Welcome name={name} />
    </>
  );
}

export default InteractiveWelcome;
