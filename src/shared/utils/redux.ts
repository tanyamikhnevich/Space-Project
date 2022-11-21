import { PayloadAction } from "@reduxjs/toolkit";

export interface IReduxState {
  isLoading: boolean;
  error: string;
}
export const pending = <T extends { isLoading: boolean }>(state: T) => {
  state.isLoading = true;
};

export const fulfilled = <T extends { isLoading: boolean; error: string }>(
  state: T
) => {
  state.isLoading = false;
  state.error = "";
};
export const rejected = <T extends { isLoading: boolean; error: string }>(
  state: T,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};
