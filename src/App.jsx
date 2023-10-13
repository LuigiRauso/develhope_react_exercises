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

/* 
Q-1: What happens if the name prop is a JSX expression instead of a string?
A-1: If the name prop is a JSX expression instead of a string, it'll be rendered as a React element.

Q-2: How do you pass a prop that contains a JSX expression?
A-1: You can pass a prop that contains a JSX expression by including the JSX expression within curly braces { }.
*/
