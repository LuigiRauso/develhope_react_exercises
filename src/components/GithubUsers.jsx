/* 
74 - Data Fetching with fetch and useEffect
    Partendo dall'esercizio precedente, create un nuovo componente GithubUsers che abbia un form con un input di testo e un bottone invia per fare il submit.
    L'input servirà per la ricerca dello user passandogli lo username.
    Ogni user cercato verrà visualizzato in una lista i cui list item saranno dei componenti GithubUser, i quali prenderanno come prop un singolo username.
*/

import React, { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUsers() {
  const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState("");

  const handleButtonClick = () => {
    setUserList([...userList, username]);
    setUsername("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleButtonClick();
  };

  const getInputValue = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="searchUser"
          id="searchUser"
          placeholder="Search user..."
          onChange={getInputValue}
          value={username}
        />
        <button type="submit">Search</button>
      </form>
      {userList.map((user, index) => (
        <GithubUser key={index} username={user} />
      ))}
    </div>
  );
}

export default GithubUsers;
