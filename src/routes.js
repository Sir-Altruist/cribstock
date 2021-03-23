import { Home, Login, Register, Welcome, Details, NotFound } from "./pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/welcome",
    component: Welcome,
  },
  {
    path: "/details",
    component: Details,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
