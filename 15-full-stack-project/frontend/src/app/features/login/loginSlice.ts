import { axiosInstance } from "@/api/axios.config";
import { toaster } from "@/components/ui/toaster";
import type { User } from "@/data";
import CookieServices from "@/services/CookieServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface loginState {
  loading: boolean;
  data: unknown;
  error: string | unknown;
  isLoggedIn: boolean;
  isRemembered?: boolean;
}

const initialState: loginState = {
  loading: false,
  data: null,
  error: null,
  isLoggedIn: Boolean(CookieServices.get("jwt")),
  isRemembered: false,
};

export const userLogin = createAsyncThunk(
  "login/userlogin",
  async (user: User, thankAPI) => {
    const { rejectWithValue } = thankAPI;
    try {
      const { data } = await axiosInstance.post(`/api/auth/local`, user);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(
          error.response?.data?.error.message ?? "Login failed",
        );

      return rejectWithValue("Something went wrong");
    }
  },
);

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    setIsRemembered: (state, action) => {
      state.isRemembered = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        state.isLoggedIn = true;
        const IN_DAYS = 3;
        const IN_HOURS = 1000 * 60 * 60 * 24 * IN_DAYS;
        const EXPIRES = new Date(Date.now() + IN_HOURS);
        CookieServices.set("jwt", action.payload.jwt, {
          path: "/",
          expires: state.isRemembered ? EXPIRES : undefined,
        });
        toaster.create({
          title: `Welcome back ${action.payload.user.username}!`,
          description: "You have been successfully logged in.",
          type: "success",
          closable: true,
        });
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
        state.isLoggedIn = false;
        toaster.create({
          title: action.payload as string,
          description: "Please check your credentials and try again.",
          type: "error",
          closable: true,
        });
      });
  },
});

export default loginSlice.reducer;
export const loginSelector = (state: { login: loginState }) => state.login;
export const { setIsRemembered } = loginSlice.actions;
