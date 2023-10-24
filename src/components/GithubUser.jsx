import React from "react";
import useGithubUser from "../hooks/useGithubUser";

function GithubUser({ username }) {
  const { user, error, loading } = useGithubUser(username);

  if (loading) {
    return (
      <div>
        <p>Fetching user data... </p>
      </div>
    );
  }
  if (!user) {
    return (
      <div>
        <p>No data available for the provided username.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
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
