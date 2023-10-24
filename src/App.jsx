import React from "react";
import Welcome from "./components/Welcome";
import Counter from "./Components/Counter";
import { Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users/luigirauso">My Github Page</Link>
          </li>
        </ul>
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
