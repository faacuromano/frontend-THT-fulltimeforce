import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

const getAllCommits = async (user: string, repo: string) => {
  const githubResponse = await axios.get(
    `${baseUrl}/v1/commits/${user}/${repo}`
  );
  return githubResponse;
};

const getCommitData = async (user: string, repo: string, sha: string) => {
  const githubResponse = await axios.get(
    `${baseUrl}/v1/commits/${user}/${repo}/${sha}`
  );
  return githubResponse;
};

export { getAllCommits, getCommitData };
