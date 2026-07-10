import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface ClickedFile {
  fileName: string;
  fileContent: string | undefined;
}

interface IInitialState {
  activeTabId: string | null;
  openFiles: IFile[];
  clickedFile: ClickedFile;
}

const initialState: IInitialState = {
  activeTabId: null,
  openFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFiles: (state, action: PayloadAction<IFile>) => {
      const exist = state.openFiles.some(
        (file) => file.id === action.payload.id,
      );
      if (!exist) state.openFiles.push(action.payload);
      state.activeTabId = action.payload.id;
      state.clickedFile.fileName = action.payload.name;
      state.clickedFile.fileContent = action.payload.content;
    },
    removeOpenFile: (state, action: PayloadAction<IFile>) => {
      const fileId = action.payload.id;
      const removedIndex = state.openFiles.findIndex(
        (file) => file.id === fileId,
      );
      if (removedIndex === -1) {
        return;
      }
      const wasActiveFile = state.activeTabId === fileId;
      state.openFiles.splice(removedIndex, 1);
      if (!wasActiveFile) {
        return;
      }
      if (state.openFiles.length === 0) {
        state.activeTabId = null;
        state.clickedFile.fileName = "";
        state.clickedFile.fileContent = "";
        return;
      }
      const nextActiveIndex = Math.max(0, removedIndex - 1);
      const nextActiveFile = state.openFiles[nextActiveIndex];
      state.activeTabId = nextActiveFile.id;
      state.clickedFile.fileName = nextActiveFile.name;
      state.clickedFile.fileContent = nextActiveFile.content;
    },
    setClickedFile: (state, action: PayloadAction<ClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setActiveTabId: (state, action: PayloadAction<string>) => {
      state.activeTabId = action.payload;
    },
  },
});

export const { setOpenFiles, removeOpenFile, setClickedFile, setActiveTabId } =
  fileTreeSlice.actions;
