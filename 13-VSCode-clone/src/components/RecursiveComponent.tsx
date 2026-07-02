import React from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderIcon from "./RenderIcon";

interface IProp {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { children, isFolder, name },
}: IProp) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <>
      <div className="flex items-center space-x-1 cursor-pointer">
        <div className="flex items-center">
          {isFolder ? (
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
              <RenderIcon fileName={name} isFolder={isFolder} isOpen={isOpen} />
              <span>{name}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1 ml-2">
              <RenderIcon fileName={name} />
              <span>{name}</span>
            </div>
          )}
        </div>
      </div>

      {children && isOpen && (
        <div className="ml-3">
          {children.map((file, idx) => (
            <RecursiveComponent key={idx} fileTree={file} />
          ))}
        </div>
      )}
    </>
  );
};

export default RecursiveComponent;
