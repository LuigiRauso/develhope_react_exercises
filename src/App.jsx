import React from "react";
import Welcome from "./components/Welcome";
import Counter from "./Components/Counter";
import { Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users/luigirauso">My Github Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="John" age="17" />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} increment={1} decrement={1} />}
        />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  );
}

export default App;
