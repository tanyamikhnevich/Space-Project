import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface RegisterResponse {
  message: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk<RegisterResponse, RegisterRequest>(
  "auth/register",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post<RegisterResponse>(
        "https://marella-api.herokuapp.com/api/auth/register",
        values
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);
