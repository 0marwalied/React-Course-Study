import { useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./app/store";
import OpenFilesBarTabs from "./components/OpenFilesBarTabs";

import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data";

function App() {
  const fileContent = useSelector(
    (state: RootState) => state.tree.clickedFile.fileContent,
  );
  return (
    <div className="flex">
      <div className="w-64  border-r-2 border-gray-500 h-screen">
        <RecursiveComponent fileTree={fileTree} />
      </div>

      <div>
        <OpenFilesBarTabs />
        <div>
          <h2 className="text-lg font-bold">{fileContent}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
