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
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user: data,
    error: error,
  };
};

export default useGithubUser;
