import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

const getAllCommits = async (user: string, repo: string) => {
  const peticion = await axios.get(`${baseUrl}/v1/commits/${user}/${repo}`);
  return peticion;
};

export { getAllCommits };
