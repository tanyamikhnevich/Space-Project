import { ReactNode } from "react";
import {
  Login,
  MySpace,
  NotFound,
  Profile,
  Registration,
  SearchSpace,
  Spaces,
} from "../../pages";

interface Route {
  path: string;
  element: ReactNode;
  default?: boolean;
}

export const publicRoutes: Array<Route> = [
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login />, default: true },
  { path: "/registration", element: <Registration /> },
];

export const privateRoutes: Array<Route> = [
  { path: "/", element: <Spaces /> },
  { path: "/spaces", element: <Spaces />, default: true },
  { path: "/myspace", element: <MySpace /> },
  { path: "/profile", element: <Profile /> },
  { path: "/search", element: <SearchSpace /> },
];
