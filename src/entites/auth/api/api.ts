import { AxiosResponse } from "axios";
import { LoginTypes } from ".";
import { api } from "shared/api/api";

export const login = (
  values: LoginTypes.LoginRequest
): Promise<AxiosResponse<LoginTypes.LoginResponse>> => {
  return api.post<LoginTypes.LoginResponse>("/auth/login", values);
};
