import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdditionalSpacesStateTypes } from ".";
import { fulfilled, IReduxState, pending, rejected } from "shared/utils/redux";
import { additionalSpacesActions as actions } from "./index";

type SpaceStateI = AdditionalSpacesStateTypes.AdditionalSpacesStateI & IReduxState;

const initialState: SpaceStateI = {
  additionalSpaces: [],
  isLoading: false,
  error: "",
};

const additionalSpaceSlice = createSlice({
  name: "additionalSpace",
  initialState,
  reducers: {
  },
  extraReducers: {
    [actions.getAdditionalSpaces.pending.type]: pending,
    [actions.getAdditionalSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<AdditionalSpacesStateTypes.AdditionalSpaceActionsReturnI>
    ) => {
      fulfilled(state);
      state.additionalSpaces = action.payload.spaces;
    },
    [actions.getAdditionalSpaces.rejected.type]: rejected,
  },
});

export const { } = additionalSpaceSlice.actions;

export default additionalSpaceSlice.reducer;
