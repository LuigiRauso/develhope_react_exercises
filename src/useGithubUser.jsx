import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Request failed: ${response.status}`);
  }
};

const useGithubUser = (username) => {
  if (!username) {
    return {
      user: null,
      error: "Please type a username",
    };
  }

  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  const refetch = () => {
    mutate();
  };

  return {
    user: data,
    error: error,
    refetch: refetch,
  };
};

export default useGithubUser;
