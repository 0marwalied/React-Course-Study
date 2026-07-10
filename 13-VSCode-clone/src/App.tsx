import { useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./app/store";
import OpenFilesBarTabs from "./components/OpenFilesBarTabs";

import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data";
import FileSyntaxhigHlighter from "./components/FileSyntaxhigHlighter";

function App() {
  const fileContent = useSelector(
    (state: RootState) => state.tree.clickedFile.fileContent,
  );
  return (
    <div className="flex h-max">
      <div className="w-64  border-r-2 border-gray-500 min-h-screen max-h-auto">
        <RecursiveComponent fileTree={fileTree} />
      </div>

      <div>
        <OpenFilesBarTabs />
        <FileSyntaxhigHlighter content={fileContent} />
      </div>
    </div>
  );
}

export default App;
