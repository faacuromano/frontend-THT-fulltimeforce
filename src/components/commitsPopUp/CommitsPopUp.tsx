import { useEffect, useState } from "react";
import { getCommitData } from "../../functions/commits.function";

type Commit = {
  path: string;
  type: string;
};

const CommitsPopUp = (props: { sha: string; author: string; repo: string }) => {
  const [dataCommit, setDataCommit] = useState<Commit[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await getCommitData(props.author, props.repo, props.sha);
      setDataCommit(response.data);
    } catch (error) {
      console.error("Error al obtener los datos del commit:", error);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      fetchData();
    }
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <button
        onClick={togglePopup}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-roboto"
      >
        <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {isPopupOpen ? "Close" : "More info"}
        </span>
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {dataCommit.length > 0 ? (
              <div>
                <h2 className="text-xl font-bold mb-4">Editions</h2>
                {dataCommit.map((commit, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <span className="mr-2">
                      {commit.type === "blob" ? "📰" : "📁"}
                    </span>
                    <p>{commit.path}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay datos disponibles.</p>
            )}
            <button
              onClick={togglePopup}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-roboto"
            >
              <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {isPopupOpen ? "Close" : "More info"}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommitsPopUp;
