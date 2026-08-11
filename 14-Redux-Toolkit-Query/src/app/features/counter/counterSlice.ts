import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  text: string;
}

// const [counter, setCounter] = useState(0)
const initialState: CounterState = {
  value: 0,
  text: "Increase Counter",
};

const counterSlice = createSlice({
  name: "counter", // ** Attached with Store
  initialState,
  reducers: {
    // ** Actions (function(num))
    increaseAction: (state, actionPayload: PayloadAction<number>) => {
      state.value += actionPayload.payload;
    },
  },
});

export const { increaseAction } = counterSlice.actions;

export default counterSlice.reducer;
