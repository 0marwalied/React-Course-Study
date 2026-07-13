import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenFileTab from "./OpenFileTab";
import { memo } from "react";

const OpenFilesBarTabs = () => {
  const openFiles = useSelector((state: RootState) => state.tree.openFiles);
  return (
    <div className="flex border-b-2 h-min border-gray-500 w-fit">
      {openFiles.map((file) => (
        <OpenFileTab key={file.id} file={file} />
      ))}
    </div>
  );
};

export default memo(OpenFilesBarTabs);
