import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YourSpacesStateTypes } from ".";
import { fulfilled, IReduxState, pending, rejected } from "shared/utils/redux";
import { yourSpacesActions as actions } from "./index";

type SpaceStateI = YourSpacesStateTypes.YourSpacesStateI & IReduxState;

const initialState: SpaceStateI = {
  yourSpaces: [],
  isLoading: false,
  error: "",
};

const yourSpaceSlice = createSlice({
  name: "yourSpace",
  initialState,
  reducers: {
    addSpaces(
      state,
      action: PayloadAction<Omit<YourSpacesStateTypes.OneSpaceI, "id">>
    ) {
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
    changeSpace(state, action: PayloadAction<YourSpacesStateTypes.OneSpaceI>) {
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
    [actions.getYourSpaces.pending.type]: pending,
    [actions.getYourSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<YourSpacesStateTypes.YourSpaceActionsReturnI>
    ) => {
      fulfilled(state);
      state.yourSpaces = action.payload.spaces;
    },
    [actions.getYourSpaces.rejected.type]: rejected,
  },
});

export const { addSpaces, removeSpace, changeSpace } = yourSpaceSlice.actions;

export default yourSpaceSlice.reducer;
