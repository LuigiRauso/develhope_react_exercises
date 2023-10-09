import React, { useEffect, useRef } from "react";

function LogTimeOnMount() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;

      console.log(
        `The component mounted for the first time at: ${new Date().toLocaleTimeString()}`
      );
    }
  }, []);
  return (
    <>
      <h1>Component Mount</h1>
      <p>Check your console for the mount time </p>
    </>
  );
}

export default LogTimeOnMount;
