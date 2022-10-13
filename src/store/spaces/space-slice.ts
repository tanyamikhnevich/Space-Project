import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { yourSpaces, yourSpacesResponse } from "./action-creators";

export interface OneSpaceI {
  id: string;
  name: string;
  isPublic: boolean;
  username?: string;
}

interface SpacesStateI {
  yourSpaces: OneSpaceI[];
  isLoading: boolean;
  error: string;
  additionalSpaces: OneSpaceI[];
  requestSpaces: OneSpaceI[];
}

const initialState: SpacesStateI = {
  yourSpaces: [],
  additionalSpaces: [],
  requestSpaces: [],
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
  },
  extraReducers: {
    [yourSpaces.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [yourSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<Array<yourSpacesResponse>>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.additionalSpaces = action.payload;
    }, //success
    [yourSpaces.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
  },
});

export const { addSpaces } = spaceSlice.actions;

export default spaceSlice.reducer;
