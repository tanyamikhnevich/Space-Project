import { AxiosResponse } from "axios";
import { RegisterTypes } from ".";
import { api } from "shared/api/api";

export const register = (
  values: RegisterTypes.RegisterRequest
): Promise<AxiosResponse<RegisterTypes.RegisterResponse>> => {
  return api.post<RegisterTypes.RegisterResponse>("/auth/register", values);
};
