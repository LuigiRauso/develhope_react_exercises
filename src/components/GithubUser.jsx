import React from "react";
import useGithubUser from "../useGithubUser";

function GithubUser({ username }) {
  const { user, error } = useGithubUser(username);

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
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
