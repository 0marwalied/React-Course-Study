import { extensionIconPaths } from "../constants";
import FileIcon from "./SVG/File";

interface IProp {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderIcon = ({ fileName, isFolder, isOpen }: IProp) => {
  const extension = fileName.split(".").pop();

  let iconPath: string = extensionIconPaths[extension!];
  if (isFolder) {
    if (!iconPath) {
      iconPath = extensionIconPaths["default"];
    }
    if (isOpen) iconPath += "-open";
    return <img src={iconPath + ".svg"} alt="" width={20} height={20} />;
  }
  if (extensionIconPaths[extension!]) {
    return (
      <img
        src={extensionIconPaths[extension!] + ".svg"}
        alt=""
        width={20}
        height={20}
      />
    );
  }
  return <FileIcon />;
};

export default RenderIcon;
