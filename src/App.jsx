import React from "react";
import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="John" age="17" />} />
      </Routes>
    </>
  );
}

export default App;
