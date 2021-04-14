import App from "./App";
import { Home, Login, Register, NotFound } from "./pages";
import {
  DashboardWrapper,
  PortfolioWrapper,
  StockWrapper,
} from "./controllers";
import { Dashboard, Profile } from "./pages/Dashboard";
import { Portfolio } from "./pages/Dashboard/Portfolio";
import { Stock } from "./pages/Dashboard/Stock";

const routes = [
  {
    component: App,
    routes: [
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
        path: "/dashboard",
        component: DashboardWrapper,
        redirectTo: "/dashboard/home",
        routes: [
          {
            path: "/dashboard/home",
            component: Dashboard,
          },
          {
            path: "/dashboard/profile",
            component: Profile,
          },
          {
            path: "/dashboard/portfolio",
            component: PortfolioWrapper,
            routes: [
              {
                path: "/dashboard/portfolio/home",
                component: Portfolio,
              },
              // {
              //   path: "/dashboard/portfolio/buy",
              //   component: PortfolioBuy
              // },
              // {
              //   path: "/dashboard/portfolio/sell",
              //   component: PortfolioSell
              // }
            ],
          },
          {
            path: "/dashboard/stock",
            component: StockWrapper,
            routes: [
              {
                path: "/dashboard/stock/home",
                component: Stock,
              },
              // {
              //   path: "/dashboard/stock/search",
              //   component: StockSearch
              // },
              // {
              //   path: "/dashboard/stock/history",
              //   component: StockHistory
              // },
              // {
              //   path: "/dashboard/stock/history",
              //   component: StockHistory
              // }
            ],
          },
        ],
      },
      {
        path: "*",
        component: NotFound,
      },
    ],
  },
];

export default routes;
