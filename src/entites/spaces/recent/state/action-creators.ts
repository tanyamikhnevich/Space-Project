import { createAsyncThunk } from "@reduxjs/toolkit";
import {recentSpacesAPI, RecentSpacesTypes } from "../api";

export const getRecentSpaces = createAsyncThunk<RecentSpacesTypes.RecentSpacesResponse[]>(
    "spaces/recent",
    async (_, thunkAPI) => {
      try {
        const { data } = await recentSpacesAPI.getRecentSpaces()
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue("Data not found");
      }
    }
);