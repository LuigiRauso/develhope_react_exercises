import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    console.log(event);

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
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
    </form>
  );
}

export default Login;
