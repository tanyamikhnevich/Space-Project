import { api } from "shared/api/api";
import { SearchSpacesTypes } from ".";
import { AxiosResponse } from "axios";

export const getSearchSpaces = (): Promise<
  AxiosResponse<SearchSpacesTypes.SearchSpacesResponse[]>
> => {
  return api.get<SearchSpacesTypes.SearchSpacesResponse[]>(
    "/spaces?limit=5&page=0&tags=&search="
  );
};
