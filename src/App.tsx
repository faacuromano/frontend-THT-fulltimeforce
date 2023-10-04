import Commits from "./components/commits/Commits";
function App() {
  return (
    <>
      <div className="font-roboto bg-violet-800 ">
        <h1 className=" text-3xl text-center p-10 font-bold text-white">
          GITHUB COMMIT HISTORY
        </h1>
        <div>
          <Commits />
        </div>
      </div>
    </>
  );
}

export default App;
