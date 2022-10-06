import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OneSpaceI {
  space_id?: string;
  name: string;
  is_public: boolean;
  username?: string;
}

interface SpacesStateI {
  spaces: OneSpaceI[];
}

const initialState: SpacesStateI = {
  spaces: [],
};

const spaceSlice = createSlice({
  name: "addSpace",
  initialState,
  reducers: {
    addSpaces(state, action: PayloadAction<OneSpaceI>) {
      state.spaces.push({
        name: action.payload.name,
        is_public: action.payload.is_public,
      });
    },
  },
});

export const { addSpaces } = spaceSlice.actions;

export default spaceSlice.reducer;
