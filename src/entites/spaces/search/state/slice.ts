import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchSpacesStateTypes } from ".";
import { fulfilled, IReduxState, pending, rejected } from "shared/utils/redux";
import { searchSpacesActions as actions } from "./index";

type SpaceStateI = SearchSpacesStateTypes.SearchSpacesStateI & IReduxState;

const initialState: SpaceStateI = {
  searchSpaces: [],
  isLoading: false,
  error: "",
};

const searchSpaceSlice = createSlice({
  name: "searchSpace",
  initialState,
  reducers: {},
  extraReducers: {
    [actions.getSearchSpaces.pending.type]: pending,
    [actions.getSearchSpaces.fulfilled.type]: (
      state,
      action: PayloadAction<SearchSpacesStateTypes.SearchSpaceActionsReturnI>
    ) => {
      fulfilled(state);
      state.searchSpaces = action.payload.spaces;
    },
    [actions.getSearchSpaces.rejected.type]: rejected,
  },
});

export const {} = searchSpaceSlice.actions;

export default searchSpaceSlice.reducer;
