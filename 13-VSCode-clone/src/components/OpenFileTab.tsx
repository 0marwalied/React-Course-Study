import { useDispatch } from "react-redux";
import type { IFile } from "../interfaces";
import RenderIcon from "./RenderIcon";
import CloseIcon from "./SVG/CloseIcon";
import { removeOpenFile, setClickedFile } from "../app/feature/fileTreeSlice";

interface IProp {
  file: IFile;
}

const OpenFileTab = ({ file }: IProp) => {
  const dispatch = useDispatch();
  const { name } = file;
  return (
    <div
      className="flex p-1 space-x-2 items-center"
      onClick={() =>
        dispatch(setClickedFile({ fileName: name, fileContent: file.content}))
      }
    >
      <RenderIcon fileName={name} />
      <div className="color-white cursor-pointer" key={file.id}>
        {name}
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
