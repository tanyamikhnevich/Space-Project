import { ReactNode } from "react";
import {
  Authorization,
  Login,
  MySpace,
  NotFound,
  Profile,
  Registration,
  SearchSpace,
  Spaces,
} from "./../pages/index";

interface Route {
  path: string;
  element: ReactNode;
}

export const publicRoutes: Array<Route> = [
  { path: "/", element: <Spaces /> },
  // { path: "/login", element: <Login /> },
  { path: "/auth", element: <Authorization /> },
  // { path: "/registration", element: <Registration /> },
  { path: "/spaces", element: <Spaces /> },
  { path: "/myspace", element: <MySpace /> },
  { path: "/profile", element: <Profile /> },
  { path: "/search", element: <SearchSpace /> },
  { path: "*", element: <NotFound /> },
];

export const privateRoutes: Array<Route> = [];
