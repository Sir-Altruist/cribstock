import {
  Home,
  Login,
  Register,
  Welcome,
  Details,
  StockDashboard,
  NotFound,
  StockSearch,
  StockHistory,
} from "./pages";

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
    path: "/dashboard/welcome",
    component: Welcome,
  },
  {
    path: "/dashboard/details",
    component: Details,
  },
  {
    path: "/dashboard/stock",
    component: StockDashboard,
  },
  {
    path: "/dashboard/search",
    component: StockSearch,
  },
  {
    path: "/dashboard/history",
    component: StockHistory,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
