import { createSlice } from "@reduxjs/toolkit";

interface networkState {
  isOpenDrawer: boolean;
}

const initialState: networkState = {
  isOpenDrawer: false,
};

const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    networkMode: (state, action) => {
      state.isOpenDrawer = action.payload;
    },
  },
});

export const networkReducer = networkSlice.reducer;
export const { networkMode } = networkSlice.actions;
