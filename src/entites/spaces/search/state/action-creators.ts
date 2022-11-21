import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchSpacesTypes, searchSpacesAPI } from "../api";

export const getSearchSpaces = createAsyncThunk<
  SearchSpacesTypes.SearchSpacesResponse[]
>("spaces/search", async (_, thunkAPI) => {
  try {
    const { data } = await searchSpacesAPI.getSearchSpaces();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Data not found");
  }
});
