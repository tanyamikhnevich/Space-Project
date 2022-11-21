import {api} from "shared/api/api";
import { AdditionalSpacesTypes } from ".";
import {AxiosResponse} from "axios";

export const getAdditionalSpaces = (): Promise<AxiosResponse<AdditionalSpacesTypes.AdditionalSpacesResponse[]>> => {
    return api.get<AdditionalSpacesTypes.AdditionalSpacesResponse[]>(
        "/spaces/permitted?limit=2&page=0"
    );
}