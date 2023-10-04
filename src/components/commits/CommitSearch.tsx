// CommitSearch.tsx

import React, { useState } from "react";

type CommitSearchProps = {
  onSearch: (user: string, repo: string) => void;
};

const CommitSearch: React.FC<CommitSearchProps> = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [repository, setRepository] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleRepositoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepository(event.target.value);
  };

  const handleSearch = () => {
    onSearch(username, repository);
  };

  return (
    <div className="flex w-full">
      <div className="w-80 p-4 m-10 bg-gray-900 shadow-2xl rounded-md flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={handleUsernameChange}
          className="w-full p-2 mb-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Repository name"
          value={repository}
          onChange={handleRepositoryChange}
          className="w-full p-2 rounded-md border border-gray-300"
        />
        <button
          onClick={handleSearch}
          className="p-2 mt-4 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none font-roboto"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default CommitSearch;
