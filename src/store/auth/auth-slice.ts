import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, LoginResponse } from "./action-creators";

export interface UserI {
  username: string;
  email: string;
  role: "ROLE_USER" | "ROLE_ADMIN";
  isEnabled: boolean;
}

interface AuthState {
  user: UserI | null;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setup(state, action: PayloadAction<LoginResponse["user"]>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [login.fulfilled.type]: (state, action: PayloadAction<LoginResponse>) => {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload.user;
    }, //success
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
  },
});

export const { setup, logout } = authSlice.actions;

export default authSlice.reducer;
