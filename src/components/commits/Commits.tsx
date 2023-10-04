import { useEffect } from "react";
import { getAllCommits } from "../../functions/commits.function";
import { useState } from "react";
import Commit from "./Commit";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commitsResponse = await getAllCommits();
        setCommits(commitsResponse.data);
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {commits.map((commit, index) => (
        <Commit
          key={index}
          message={commit.message}
          authorName={commit.authorName}
          commitDate={commit.commitDate}
          sha={commit.sha}
          authorEmail={commit.authorEmail}
        />
      ))}
    </>
  );
};

export default CommitList;
