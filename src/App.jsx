import React from "react";
import AlertClock from "./components/AlertClock";

function App() {
  const handleClick = () => {
    alert(`It's: ${new Date().toLocaleTimeString("it-IT")}`);
  };

  return (
    <>
      <AlertClock onClick={handleClick} />
    </>
  );
}

export default App;
