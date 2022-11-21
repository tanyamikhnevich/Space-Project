import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api/api";

export interface LoginResponse {
  user: {
    username: string;
    email: string;
    role: "ROLE_USER" | "ROLE_ADMIN";
    isEnabled: boolean;
  };
  accessToken: string;
  refreshToken: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export const login = createAsyncThunk<LoginResponse, LoginRequest>(
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const { data } = await api.post<LoginResponse>("/auth/login", values);
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);
