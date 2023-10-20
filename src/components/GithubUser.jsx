import React, { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
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
  }, [username]);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <p>Data is loading...</p>
      </div>
    );
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p> Username: {user.login}</p>
      <img src={user.avatar_url} alt={user.login + "img"} width="200px" />
    </div>
  );
}

export default GithubUser;
