import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, LoginTypes } from "./../api";
import { api } from "shared/api/api";

export const login = createAsyncThunk<
  LoginTypes.LoginResponse,
  LoginTypes.LoginRequest
>("auth/login", async (values, thunkAPI) => {
  try {
    const { data } = await loginAPI.login(values);
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));
    api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error");
  }
});
