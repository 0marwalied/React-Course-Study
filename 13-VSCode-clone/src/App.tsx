import { useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./app/store";
import OpenFilesBarTabs from "./components/OpenFilesBarTabs";

import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data";
import FileSyntaxhigHlighter from "./components/FileSyntaxhigHlighter";
import ResizablePanel from "./components/ResizablePanel";

function App() {
  const fileContent = useSelector(
    (state: RootState) => state.tree.clickedFile.fileContent,
  );
  const openFiles = useSelector((state: RootState) => state.tree.openFiles);
  return (
    <div className="flex h-max">
      <ResizablePanel
        showLeftPanel={true}
        leftPanel={
          <div className="w-64 min-h-screen max-h-auto">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={
          openFiles.length > 0 ? (
            <div>
              <OpenFilesBarTabs />
              <FileSyntaxhigHlighter content={fileContent} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <img src="/icons/vscode.svg" alt="vscode" className="w-64 h-64" />
            </div>
          )
        }
      />
    </div>
  );
}

export default App;
