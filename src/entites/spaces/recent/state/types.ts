import { RecentSpacesTypes} from "../api";
import {YourSpacesStateTypes} from './../../yours'


export interface RecentSpacesStateI {
  recentSpaces: YourSpacesStateTypes.OneSpaceI[],
}

export type RecentSpaceActionsReturnI = RecentSpacesTypes.RecentSpacesResponse;
