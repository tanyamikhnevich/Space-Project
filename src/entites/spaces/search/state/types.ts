import { SearchSpacesTypes } from "../api";

export interface SearchSpace {
  space_id: number;
  name: string;
  username: string;
  tags: string[];
}

export interface SearchSpacesStateI {
  searchSpaces: SearchSpace[];
}

export type SearchSpaceActionsReturnI = SearchSpacesTypes.SearchSpacesResponse;
