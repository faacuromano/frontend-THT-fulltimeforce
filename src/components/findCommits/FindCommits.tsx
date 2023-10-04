import React, { useState } from "react";
import { getAllCommits } from "../../functions/commits.function";

const FindCommits = () => {
  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState("");

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleRepoChange = (e: any) => {
    setRepo(e.target.value);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      const commitsResponse = await getAllCommits(username, repo);
      console.log("Commits:", commitsResponse.data);
      // Aquí puedes hacer algo con los commits, por ejemplo, pasarlos a otro componente
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 font-semibold">
          Username de GitHub:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="repo" className="block mb-2 font-semibold">
          Nombre del repositorio:
        </label>
        <input
          type="text"
          id="repo"
          value={repo}
          onChange={handleRepoChange}
          className="border p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Buscar
      </button>
    </form>
  );
};

export default FindCommits;
