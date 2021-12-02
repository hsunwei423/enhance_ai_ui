import Home from "pages/Home";
import NoMatch from "pages/NoMatch";

export const ROUTE_LIST = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/features",
    name: "Features",
    component: Home,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Home,
  },
  {
    path: "*",
    name: "NotFound",
    component: NoMatch,
  },
];
