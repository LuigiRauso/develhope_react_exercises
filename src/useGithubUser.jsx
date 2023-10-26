import useSWR from "swr";

const useGithubUser = (username) => {
  if (!username) {
    return {
      user: null,
      error: "Please type a username",
    };
  }

  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
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
