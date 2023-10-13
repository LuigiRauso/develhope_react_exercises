import React from "react";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Hello />
      <Message />
    </div>
  );
}

export default App;

/* 
Q: Can you render the Message component directly within the App component? What happens if you do?
A: Yes, you can. Both Hello and Message components will be displayed. This works because in React, components are reusable and can be rendered within other components.
*/
