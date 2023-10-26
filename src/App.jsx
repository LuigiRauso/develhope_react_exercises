import { SWRConfig } from "swr";
import GithubUser from "./components/GithubUser";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Request failed: ${response.status}`);
  }
};

function App() {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GithubUser username="luigirauso" />
      </SWRConfig>
    </>
  );
}

export default App;
