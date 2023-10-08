import React, { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";

function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleInputNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLogin = (loginData) => {
    console.log(loginData);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleInputNameChange} />
      <Welcome name={name} />
      <Login onLogin={handleLogin} />
    </>
  );
}

export default InteractiveWelcome;
