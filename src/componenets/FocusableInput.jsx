import React, { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="mx-auto card" style={{maxWidth: "320px", marginTop: "1rem"}}>
      <div className="card-body">
        <h5 className="text-center">Login</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input ref={inputRef} type="text" name="username" id="username" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FocusableInput;
