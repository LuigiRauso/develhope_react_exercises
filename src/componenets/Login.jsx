import React, { useState } from "react";

const formData = {
  username: "",
  password: "",
  remember: false,
};

function Login({ onLogin }) {
  const [data, setData] = useState(formData);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleResetClick = () => {
    setData(formData);
  };

  // Q: How do you prevent the default behavior of the form element?
  // A: We prevent the default behaviour of the form element by using the event.preventDefault() method in the event handler function.
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onLogin(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="checkbox">Remember: </label>
      <input
        type="checkbox"
        name="remember"
        id="checkbox"
        checked={data.remember}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        disabled={!data.username || !data.password}
        style={{ backgroundColor: data.password > 8 ? "green" : "red" }}
      >
        Login
      </button>
      <br />
      <button type="reset" onClick={handleResetClick}>
        Reset
      </button>
    </form>
  );
}

export default Login;
