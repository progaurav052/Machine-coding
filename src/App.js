import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <div className=" bg-blue-200 m-2 p-4 rounded-lg shadow-lg">
        <h1 className="font-bold text-xl ">Machine Coding </h1>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
