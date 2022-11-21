import { RegisterTypes } from "..";

export interface RegisterStateI {
  message: string | null;
}

export type RegisterActionsReturnI = RegisterTypes.RegisterResponse;
