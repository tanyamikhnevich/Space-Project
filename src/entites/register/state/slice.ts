import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterStateTypes } from ".";
import { fulfilled, IReduxState, pending, rejected } from "shared/utils/redux";
import { registerActions as actions } from ".";

type RegisterState = RegisterStateTypes.RegisterStateI & IReduxState;

const initialState: RegisterState = {
  message: null,
  isLoading: false,
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {
    [actions.register.pending.type]: pending,
    [actions.register.fulfilled.type]: (
      state,
      action: PayloadAction<RegisterStateTypes.RegisterActionsReturnI>
    ) => {
      fulfilled(state);
      state.message = action.payload.message;
    },
    [actions.register.rejected.type]: rejected,
  },
});

export const {} = registerSlice.actions;

export default registerSlice.reducer;
