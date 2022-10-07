import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterResponse, register } from "./action-creators";

interface RegisterState {
  message: string | null;
  isLoading: boolean;
  error: string;
}

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
    [register.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [register.fulfilled.type]: (
      state,
      action: PayloadAction<RegisterResponse>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.message = action.payload.message;
    }, //success
    [register.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
  },
});

export const {} = registerSlice.actions;

export default registerSlice.reducer;
