import React from "react";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome name={<b>Luigi</b>} age="30" />
    </>
  );
}

export default App;
