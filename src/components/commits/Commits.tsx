import { useEffect } from "react";
import { getAllCommits } from "../../functions/commits.function";
import { useState } from "react";
import Commit from "./Commit";
import CommitSearch from "./CommitSearch";

// Definición de un tipo para representar un commit
type Commit = {
  message: string;
  authorName: string;
  commitDate: string;
  sha: string;
  authorEmail: string;
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
      <div className="w-3/5 p-4">
        {commits.map((commit, index) => (
          <div key={index} className="mb-4">
            <Commit
              message={commit.message}
              authorName={commit.authorName}
              commitDate={commit.commitDate}
              sha={commit.sha}
              authorEmail={commit.authorEmail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitList;
