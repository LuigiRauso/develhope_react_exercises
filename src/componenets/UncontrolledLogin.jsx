import React from "react";

function UncontrolledLogin() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const remember = event.target.elements.namedItem("remember").checked;

    const data = {
      username,
      password,
      remember,
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" />
      <br />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" />
      <br />
      <label htmlFor="checkbox">Remember: </label>
      <input type="checkbox" name="remember" id="checkbox" />
      <button type="submit">Login</button>
      <br />
      <button type="reset">Reset</button>
    </form>
  );
}

export default UncontrolledLogin;

