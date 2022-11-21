import { api } from "shared/api/api";
import { YourSpacesTypes } from ".";
import { AxiosResponse } from "axios";

export const getYoursSpaces = (): Promise<
  AxiosResponse<YourSpacesTypes.YourSpacesResponse[]>
> => {
  return api.get<YourSpacesTypes.YourSpacesResponse[]>(
    "/spaces/yours?limit=10&page=0"
  );
};
