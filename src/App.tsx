import CommitList from "./components/commits/Commits";
function App() {
  return (
    <div className="font-roboto">
      <h1 className=" text-3xl text-center p-10 font-bold text-white">
        GITHUB COMMIT HISTORY
      </h1>
      <div>
        <CommitList />
      </div>
    </div>
  );
}

export default App;
