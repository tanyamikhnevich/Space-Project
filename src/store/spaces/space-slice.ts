import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  additionalSpaces,
  recentSpaces,
  searchSpaces,
  SpacesSearchResponse,
  yourSpaces,
  YourSpacesResponse,
} from "./action-creators";

export interface OneSpaceI {
  id: string;
  name: string;
  isPublic: boolean;
  username?: string;
}

interface SearchSpace {
  space_id: number;
  name: string;
  username: string;
  tags: string[];
}

interface SpacesStateI {
  yourSpaces: OneSpaceI[];
  isLoading: boolean;
  error: string;
  additionalSpaces: OneSpaceI[];
  recentSpaces: OneSpaceI[];
  searchSpaces: SearchSpace[];
}

const initialState: SpacesStateI = {
  yourSpaces: [],
  additionalSpaces: [],
  recentSpaces: [],
  searchSpaces: [],
  isLoading: false,
  error: "",
};

const spaceSlice = createSlice({
  name: "addSpace",
  initialState,
  reducers: {
    addSpaces(state, action: PayloadAction<Omit<OneSpaceI, "id">>) {
      state.yourSpaces.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        isPublic: action.payload.isPublic,
      });
    },
    removeSpace(state, action: PayloadAction<string>) {
      state.yourSpaces = state.yourSpaces.filter(
        (space) => space.id !== action.payload
      );
    },
    changeSpace(state, action: PayloadAction<OneSpaceI>) {
      const space = state.yourSpaces.find(
        (space) => space.id === action.payload.id
      );
      if (!space) return;
      space.name = action.payload.name;
      space.isPublic = action.payload.isPublic;
      state.yourSpaces.splice(state.yourSpaces.indexOf(space), 1, space);
    },
  },
  extraReducers: {
    [yourSpaces.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [yourSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<YourSpacesResponse>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.yourSpaces = action.payload.spaces;
    }, //success
    [yourSpaces.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
    [recentSpaces.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [recentSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<YourSpacesResponse>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.recentSpaces = action.payload.spaces;
    }, //success
    [recentSpaces.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
    [additionalSpaces.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [additionalSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<YourSpacesResponse>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.additionalSpaces = action.payload.spaces;
    }, //success
    [additionalSpaces.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
    [searchSpaces.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [searchSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<SpacesSearchResponse>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.searchSpaces = action.payload.spaces;
    }, //success
    [searchSpaces.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
  },
});

export const { addSpaces, removeSpace, changeSpace } = spaceSlice.actions;

export default spaceSlice.reducer;
