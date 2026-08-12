import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { IProudct } from "../../../interfaces";
import axiosInstance from "../../../config/axios.config";
import { RootState } from "../../store";

interface ProductsState {
  loading: boolean;
  productsList: IProudct[];
  error: string | null;
}

const initialState: ProductsState = {
  loading: true,
  productsList: [],
  error: null,
};

export const getProductList = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get(
        "/products?limit=10&select=title,price,thumbnail",
      );
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const productsSlice = createSlice({
  name: "products", // ** Attached with Store
  initialState,
  reducers: {},
  extraReducers: {
    [`${getProductList.pending}`]: (state: ProductsState) => {
      state.loading = true;
    },

    [`${getProductList.fulfilled}`]: (
      state: ProductsState,
      action: PayloadAction<IProudct[]>,
    ) => {
      state.productsList = action.payload;
      state.loading = false;
    },

    [`${getProductList.rejected}`]: (
      state: ProductsState,
      action: PayloadAction<string | null>,
    ) => {
      state.loading = false;
      state.error = action.payload;
      state.productsList = [];
    },
  },
});

export const productsSelector = ({ products }: RootState) => products;
export default productsSlice.reducer;
