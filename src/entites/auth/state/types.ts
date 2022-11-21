import { LoginTypes } from "..";

export interface UserI {
  username: string;
  email: string;
  role: "ROLE_USER" | "ROLE_ADMIN";
  isEnabled: boolean;
}

export interface AuthState {
  user: UserI | null;
}

export type LoginActionReturnI = LoginTypes.LoginResponse;
