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

  const handleLoginClick = (event) => {
    event.preventDefault();
    onLogin(data);
  };

  return (
    <form>
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
        onClick={handleLoginClick}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
