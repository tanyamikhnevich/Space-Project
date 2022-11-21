import { YourSpacesTypes } from "../api";

export interface OneSpaceI {
  id: string;
  name: string;
  isPublic: boolean;
  username?: string;
}

export interface YourSpacesStateI {
  yourSpaces: OneSpaceI[];
}

export type YourSpaceActionsReturnI = YourSpacesTypes.YourSpacesResponse;
