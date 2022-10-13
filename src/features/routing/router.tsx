import { ReactNode } from "react";
import {
  Login,
  MySpace,
  Profile,
  Registration,
  SearchSpace,
  Spaces,
} from "../../pages";

export interface Route {
  path: string;
  element: ReactNode;
  default?: boolean;
}

export const publicRoutes: Array<Route> = [
  { path: "/login", element: <Login />, default: true },
  { path: "/registration", element: <Registration /> },
];

export const privateRoutes: Array<Route> = [
  { path: "/spaces", element: <Spaces />, default: true },
  { path: "/myspace", element: <MySpace /> },
  { path: "/profile", element: <Profile /> },
  { path: "/search", element: <SearchSpace /> },
];
