import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenFileTab from "./OpenFileTab";

const OpenFilesBarTabs = () => {
  const openFiles = useSelector((state: RootState) => state.tree.openFiles);
  return (
    <div className="flex space-x-3 ml-2">
      {openFiles.map((file) => (
        <OpenFileTab key={file.id} file={file} />
      ))}
    </div>
  );
};

export default OpenFilesBarTabs;
