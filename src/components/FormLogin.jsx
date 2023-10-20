import React from "react";
import useForm from "../useForm";

function FormLogin() {
  const { formData, onInputChange } = useForm({ username: "", password: "" });

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={onInputChange}
        value={formData.username}
      />

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={onInputChange}
        value={formData.password}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default FormLogin;
