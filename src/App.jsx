import React from "react";
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;

// Scusa, ci sono stati problemi durante il push. Grazie per avermi fatto notare l'errore, allego di nuovo la risposta:

/* 
Q: Can you use the Hello component more than once in the App component? What happens if you do?
A: Yes, you can use the Hello component multiple times in the App component. Each instance will be rendered independently on the page.
*/
