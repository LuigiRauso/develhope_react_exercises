import React from "react";
import Welcome from "./components/Welcome";
import Counter from "./Components/Counter";
import { Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";
import GithubUserList from "./components/GithubUserList";

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
            <Link to="/users">Github Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="John" age="17" />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} increment={1} decrement={1} />}
        />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Page not found</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
