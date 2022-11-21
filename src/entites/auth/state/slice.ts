import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authActions as actions, LoginStateTypes } from ".";
import { fulfilled, IReduxState, pending, rejected } from "shared/utils/redux";

type AuthState = LoginStateTypes.AuthState & IReduxState;

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setup(
      state,
      action: PayloadAction<LoginStateTypes.LoginActionReturnI["user"]>
    ) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [actions.login.pending.type]: pending,
    [actions.login.fulfilled.type]: (
      state,
      action: PayloadAction<LoginStateTypes.LoginActionReturnI>
    ) => {
      fulfilled(state);
      state.user = action.payload.user;
    },
    [actions.login.rejected.type]: rejected,
  },
});

export const { setup, logout } = authSlice.actions;

export default authSlice.reducer;
