import { useEffect } from "react";
import { getAllCommits } from "../../functions/commits.function";
import { useState } from "react";
import Commit from "./Commit";
import CommitSearch from "./CommitSearch";

type Commit = {
  message: string;
  authorName: string;
  commitDate: string;
  sha: string;
  authorEmail: string;
  treeChanges: string;
};

const CommitList = () => {
  const [commits, setCommits] = useState<Commit[]>([]);

  const handleSearch = async (username: string, repository: string) => {
    try {
      const commitsResponse = await getAllCommits(username, repository);
      setCommits(commitsResponse.data);
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, []);

  return (
    <div className="flex w-100">
      <div className=" p-4 ">
        <CommitSearch onSearch={handleSearch} />
      </div>
      {commits.length > 0 ? (
        <div className="w-3/5 p-4">
          {commits.map((commit, index) => (
            <div key={index} className="mb-4">
              <Commit
                message={commit.message}
                authorName={commit.authorName}
                commitDate={commit.commitDate}
                sha={commit.sha}
                authorEmail={commit.authorEmail}
                treeChanges={commit.treeChanges}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-3/5 flex shadow-2xl flex-col	 justify-center white mx-auto mt-3 relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <h1 className="text-white text-3xl">No hay datos para mostrar</h1>
          <p className="text-gray-400 text-xl">
            * Comlpeta los datos del formulario de la izquierda
          </p>
          <p className="text-gray-400 text-xl">* Los inputs NO son KeySens</p>
        </div>
      )}
    </div>
  );
};

export default CommitList;
