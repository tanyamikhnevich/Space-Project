import { createAsyncThunk } from "@reduxjs/toolkit";
import { yourSpacesAPI, YourSpacesTypes } from "../api";

export const getYourSpaces = createAsyncThunk<
  YourSpacesTypes.YourSpacesResponse[]
>("spaces/yours", async (_, thunkAPI) => {
  try {
    const { data } = await yourSpacesAPI.getYoursSpaces();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Data not found");
  }
});

export interface CreateSpaceRequest {
  isPublic: boolean;
  name: string;
  members: string;
  tags: string[];
}
export const testCreate = createAsyncThunk<void, CreateSpaceRequest>(
  "spaces/create",
  async (values, thunkAPI) => {
    setTimeout(async () => {
      try {
        console.log("data = ", values);
        // return  {
        //     "space_id": 1,
        //     "name": "space1",
        //     "username": "test",
        //     "tags": [
        //         "test",
        //         "tag"
        //     ]
        // }
      } catch (e) {
        return thunkAPI.rejectWithValue("Data not found");
      }
    }, 1000);
  }
);
