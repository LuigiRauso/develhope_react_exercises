/* 
Create a GithubUserList component that fetching this API url, https://api.github.com/users, show a list of links of github usernames.
By clicking on a username, the ShowGithubUser component will be displayed. Add a Route to the users path that shows the GithubUserList component.
In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.
*/

import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GithubUserList() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error(`Request failed: ${response.status}`);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <ul>
          {user &&
            user.map((user) => {
              return (
                <li key={user.id}>
                  <Link to={`/users/${user.login}`}>{user.login}</Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default GithubUserList;
