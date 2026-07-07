import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface ClickedFile {
  fileName: string;
  fileContent: string;
}

interface IInitialState {
  openFiles: IFile[];
  clickedFile: ClickedFile;
}

const initialState: IInitialState = {
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
    },
    removeOpenFile: (state, action: PayloadAction<IFile>) => {
      state.openFiles = state.openFiles.filter(
        (file) => file.id !== action.payload.id,
      );
    },
  },
});

export const { setOpenFiles, removeOpenFile } = fileTreeSlice.actions;
