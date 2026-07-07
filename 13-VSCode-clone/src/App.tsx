import "./App.css";
import OpenFilesBarTabs from "./components/OpenFilesBarTabs";

import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data";

function App() {
  return (
    <div className="flex">
      <div className="w-64  border-r-2 border-gray-500 h-screen">
        <RecursiveComponent fileTree={fileTree} />
      </div>

      <OpenFilesBarTabs />
    </div>
  );
}

export default App;
