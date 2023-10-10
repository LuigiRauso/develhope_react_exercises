import React, { useEffect, useState } from "react";
import classes from "./Clock.module.scss";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("it-IT"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={classes["clock-container"]}>
      <h2>Current time:</h2>
      <h4>{time}</h4>
    </div>
  );
}

export default Clock;
