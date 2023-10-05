import { extractRepoNameFromUrl } from "../../functions/helpers.function";
import CommitsPopUp from "../commitsPopUp/CommitsPopUp";

type CommitProps = {
  message: string;
  authorName: string;
  commitDate: string;
  sha: string;
  authorEmail: string;
  treeChanges: string;
};

const Commit = (props: CommitProps) => {
  const toDate = (completeDate: string) => {
    var data2date: string;
    data2date = completeDate.slice(0, -10);

    return data2date;
  };

  const toHouer = (completeDate: string) => {
    var data2date: string;
    data2date = completeDate.slice(11, -4);

    return data2date;
  };
  return (
    <div className="shadow-2xl white mx-auto mt-3 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      <h1 className="text-white text-2xl font-bold mb-4 align-middle text-center">
        {props.message}
      </h1>
      <div className="flex justify-between">
        <div className="text-gray-400">
          <h3 className="font-semibold text-l">
            👨‍💻 Author: {props.authorName}
          </h3>
          <h3 className="font-semibold text-l">
            📅 {toDate(props.commitDate)} - 🕗 {toHouer(props.commitDate)}
          </h3>
        </div>
        <div className="text-gray-400">
          <h3 className="font-normal text-l">
            📧 Author email: {props.authorEmail}
          </h3>
          <h3 className=" font-normal text-l">🔑 SHA: {props.sha}</h3>
        </div>
      </div>
      <div className="text-center">
        <CommitsPopUp
          sha={props.sha}
          author={props.authorName}
          repo={extractRepoNameFromUrl(props.treeChanges)}
        />
      </div>
    </div>
  );
};

export default Commit;
