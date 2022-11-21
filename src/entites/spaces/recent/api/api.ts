import {api} from "shared/api/api";
import { RecentSpacesTypes } from ".";
import {AxiosResponse} from "axios";

export const getRecentSpaces = (): Promise<AxiosResponse<RecentSpacesTypes.RecentSpacesResponse[]>> => {
    return api.get<RecentSpacesTypes.RecentSpacesResponse[]>(
        "/spaces/recent?limit=2&page=0"
    );
}