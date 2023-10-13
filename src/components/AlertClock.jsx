import React from "react";

function AlertClock() {
  const handleClick = () => {
    alert(`It's: ${new Date().toLocaleTimeString("it-IT")}`);
  };

  return <button onClick={handleClick}>What time is it?</button>;
}

export default AlertClock;
