import { AdditionalSpacesTypes} from "../api";
import {YourSpacesStateTypes} from './../../yours'


export interface AdditionalSpacesStateI {
  additionalSpaces: YourSpacesStateTypes.OneSpaceI[],
}

export type AdditionalSpaceActionsReturnI = AdditionalSpacesTypes.AdditionalSpacesResponse;
