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
    <form
      onSubmit={handleFormSubmit}
      className="max-w-sm px-8 pt-6 pb-8 m-auto mt-20 mb-4 bg-white rounded shadow-md"
    >
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="checkbox"
        >
          Remember
        </label>
        <input type="checkbox" name="remember" id="checkbox" />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
          type="reset"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default UncontrolledLogin;
