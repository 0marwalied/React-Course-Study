import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
  isOpenDrawer: boolean;
}

const initialState: GlobalState = {
  isOpenDrawer: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    flipDrawer: (state) => {
      state.isOpenDrawer = !state.isOpenDrawer;
    },
    openDrawer: (state) => {
      state.isOpenDrawer = true;
    },
    closeDrawer: (state) => {
      state.isOpenDrawer = false;
    },
  },
});

export const globalReducer = globalSlice.reducer;
export const { flipDrawer, openDrawer, closeDrawer } = globalSlice.actions;
