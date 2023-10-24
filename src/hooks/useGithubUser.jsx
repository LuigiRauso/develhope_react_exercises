import { useEffect, useState } from "react";

function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        throw new Error(`Request failed: ${response.status}`);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return { user, error, loading, fetchData };
}

export default useGithubUser;
