import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderIcon from "./RenderIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  removeOpenFile,
  setActiveTabId,
  setClickedFile,
} from "../app/feature/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProp {
  file: IFile;
}

const OpenFileTab = ({ file }: IProp) => {
  const dispatch = useDispatch();
  const activeTabId = useSelector((state: RootState) => state.tree.activeTabId);
  const { id, name, content } = file;
  return (
    <div
      className={`flex items-center p-2 border-t-2 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
    >
      <div
        className="flex space-x-2 items-center"
        onClick={() => {
          dispatch(setClickedFile({ fileName: name, fileContent: content }));
          dispatch(setActiveTabId(id));
        }}
      >
        <RenderIcon fileName={name} />
        <div className="color-white cursor-pointer" key={file.id}>
          {name}
        </div>
      </div>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit p-1 rounded-md"
        onClick={() => dispatch(removeOpenFile(file))}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenFileTab;
