import { Login } from "../pages/login-page/login";
import { Registration } from "../pages/registration-page/registration";
import { TasksPage } from "../pages/tasks-page/tasks-page";

interface Route {
  path: string;
  component: ;
  exact: boolean;
}

export const routes: Array<Route> = [
  { path: "/login", component: Login, exact: true },
  { path: "/registration", component: Registration, exact: true },
  { path: "/tasks", component: TasksPage, exact: true },
];
