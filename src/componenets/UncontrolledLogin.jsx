import React from "react";

function UncontrolledLogin() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    /* 
    Q: When accessing the data of the form, what are the ways that you can access the current value of the username and password inputs?
    A: There are several ways to access the current value of the username and password inputs in an uncontrolled form:


    1. First method:
        const username = event.target.elements.namedItem("username").value;
        const password = event.target.elements.namedItem("password").value;
        const remember = event.target.elements.namedItem("remember").checked;

    2. Second method:
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;


    3. Third method:
        const username = event.target.username.value;
        const password = event.target.password.value;
        const remember = event.target.remember.checked;


    4. Fourth method:
        const formData = new FormData(event.target);

        const data = {
          username: formData.get("username"),
          password: formData.get("password"),
          remember: formData.get("session") === "on" ? true : false,
        };
    */

    /* 
    Attempt to access the values of the form using the DOM API by reading the event.target of the onSubmit event handler.
    Q: What is the standard API?
    A: The standard API to access data form is the FormData interface. This is generally the recommended approach.

    Q: Are there non-standard APIs that can be used to access the form data?
    A: Absolutely, non-standard approaches include directly interfacing with form inputs via their name attribute, as shown in the third method. Alternatively, you can use the first and second method.
    */

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
