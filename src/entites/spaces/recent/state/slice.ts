import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecentSpacesStateTypes } from ".";
import { fulfilled, IReduxState, pending, rejected } from "shared/utils/redux";
import { recentSpacesActions as actions } from "./index";

type SpaceStateI = RecentSpacesStateTypes.RecentSpacesStateI & IReduxState;

const initialState: SpaceStateI = {
  recentSpaces: [],
  isLoading: false,
  error: "",
};

const recentSpaceSlice = createSlice({
  name: "recentSpace",
  initialState,
  reducers: {
  },
  extraReducers: {
    [actions.getRecentSpaces.pending.type]: pending,
    [actions.getRecentSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<RecentSpacesStateTypes.RecentSpaceActionsReturnI>
    ) => {
      fulfilled(state);
      state.recentSpaces = action.payload.spaces;
    },
    [actions.getRecentSpaces.rejected.type]: rejected,
  },
});

export const { } = recentSpaceSlice.actions;

export default recentSpaceSlice.reducer;
