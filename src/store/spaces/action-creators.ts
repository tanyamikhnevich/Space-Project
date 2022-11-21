import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api/api";
import axios from "axios";

export interface YourSpacesResponse {
  spaces: Array<{
    id: string;
    name: string;
    isPublic: boolean;
    username: string;
  }>;
}

export const yourSpaces = createAsyncThunk<Array<YourSpacesResponse>>(
  "spaces/yours",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Array<YourSpacesResponse>>(
        "/spaces/yours?limit=10&page=0"
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);

export const recentSpaces = createAsyncThunk<Array<YourSpacesResponse>>(
  "spaces/recent",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Array<YourSpacesResponse>>(
        "/spaces/recent?limit=2&page=0"
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);

export const additionalSpaces = createAsyncThunk<Array<YourSpacesResponse>>(
  "spaces/additional",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Array<YourSpacesResponse>>(
        "/spaces/permitted?limit=2&page=0"
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);

export interface SpacesSearchResponse {
  spaces: Array<{
    space_id: number;
    name: string;
    username: string;
    tags: string[];
  }>;
}

export const searchSpaces = createAsyncThunk<SpacesSearchResponse[]>(
  "spaces/search",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<SpacesSearchResponse[]>(
        "/spaces?limit=5&page=0&tags=&search="
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);

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
