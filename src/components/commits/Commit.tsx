type CommitProps = {
  message: string;
  authorName: string;
  commitDate: string;
  sha: string;
  authorEmail: string;
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
    <div className="w-3/5 shadow-2xl white mx-auto mt-3 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-roboto">
          <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            More info
          </span>
        </button>
      </div>
    </div>
  );
};

export default Commit;
