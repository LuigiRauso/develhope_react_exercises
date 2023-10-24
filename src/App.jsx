import React from "react";
import Welcome from "./components/Welcome";
import Counter from "./Components/Counter";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="John" age="17" />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} increment={1} decrement={1} />}
        />
      </Routes>
    </>
  );
}

export default App;
