import React, { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <label htmlFor="username">Username: </label>
      <input ref={inputRef} type="text" name="username" id="username" />
    </>
  );
}

export default FocusableInput;
