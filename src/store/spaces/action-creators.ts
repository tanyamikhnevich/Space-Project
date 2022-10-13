import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api/api";

export interface yourSpacesResponse {
  id: string;
  name: string;
  isPublic: boolean;
  username: string;
}

export const yourSpaces = createAsyncThunk<Array<yourSpacesResponse>>(
  "spaces/yours",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Array<yourSpacesResponse>>(
        "/spaces/yours"
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);
