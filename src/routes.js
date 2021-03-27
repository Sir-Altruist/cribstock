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
  StockHistory2,
  Portfolio,
  BuyStock,
  SellStock,
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
    path: "/dashboard/index",
    component: Welcome,
  },
  {
    path: "/dashboard/details",
    component: Details,
  },
  {
    path: "/stock/index",
    component: StockDashboard,
  },
  {
    path: "/stock/search",
    component: StockSearch,
  },
  {
    path: "/stock/history",
    component: StockHistory,
  },
  {
    path: "/stock/history2",
    component: StockHistory2,
  },
  {
    path: "/portfolio/index",
    component: Portfolio,
  },
  {
    path: "/portfolio/buystock",
    component: BuyStock,
  },
  {
    path: "/portfolio/sellstock",
    component: SellStock,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
