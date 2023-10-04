import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

const getAllCommits = async () => {
  const peticion = await axios.get(`${baseUrl}/v1/commits`);
  return peticion;
};

export { getAllCommits };
