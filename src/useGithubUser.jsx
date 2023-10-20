import { useEffect, useState } from "react";

function useGithubUser(username) {
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

  return { user, error };
}

export default useGithubUser;
