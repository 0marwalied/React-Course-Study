import FileIcon from "./SVG/File";

interface IProp {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderIcon = ({ fileName, isFolder, isOpen }: IProp) => {
  const extension = fileName.split(".").pop();

  // Files
  if (extension === "tsx")
    return (
      <img
        src="../../public/icons/react_ts.svg"
        alt=""
        width={20}
        height={20}
      />
    );
  if (extension === "js")
    return (
      <img
        src="../../public/icons/javascript.svg"
        alt=""
        width={20}
        height={20}
      />
    );
  if (extension === "jsx")
    return (
      <img src="../../public/icons/react.svg" alt="" width={20} height={20} />
    );
  if (extension === "html")
    return (
      <img src="../../public/icons/html.svg" alt="" width={20} height={20} />
    );

  // Folders
  if (extension === "node_modules" && isFolder)
    return isOpen ? (
      <img
        src="../../public/icons/folder-node-open.svg"
        alt=""
        width={20}
        height={20}
      />
    ) : (
      <img
        src="../../public/icons/folder-node.svg"
        alt=""
        width={20}
        height={20}
      />
    );
  if (extension === "public" && isFolder)
    return isOpen ? (
      <img
        src="../../public/icons/folder-public-open.svg"
        alt=""
        width={20}
        height={20}
      />
    ) : (
      <img
        src="../../public/icons/folder-public.svg"
        alt=""
        width={20}
        height={20}
      />
    );
  if (extension === "src" && isFolder)
    return isOpen ? (
      <img
        src="../../public/icons/folder-src-open.svg"
        alt=""
        width={20}
        height={20}
      />
    ) : (
      <img
        src="../../public/icons/folder-src.svg"
        alt=""
        width={20}
        height={20}
      />
    );
  if (isFolder)
    return isOpen ? (
      <img
        src="../../public/icons/folder-default-open.svg"
        alt=""
        width={20}
        height={20}
      />
    ) : (
      <img
        src="../../public/icons/folder-default.svg"
        alt=""
        width={20}
        height={20}
      />
    );
  return <FileIcon />;
};

export default RenderIcon;
