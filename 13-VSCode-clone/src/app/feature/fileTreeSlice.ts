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
    },
    removeOpenFile: (state, action: PayloadAction<IFile>) => {
      state.openFiles = state.openFiles.filter(
        (file) => file.id !== action.payload.id,
      );
    },
    setClickedFile: (state, action: PayloadAction<ClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOpenFiles, removeOpenFile, setClickedFile } =
  fileTreeSlice.actions;
