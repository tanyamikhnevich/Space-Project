import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerAPI, RegisterTypes } from "../api";

export const register = createAsyncThunk<
  RegisterTypes.RegisterResponse,
  RegisterTypes.RegisterRequest
>("auth/register", async (values, thunkAPI) => {
  try {
    const response = await registerAPI.register(values);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error");
  }
});
