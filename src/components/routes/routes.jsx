import { createBrowserRouter } from "react-router";
import Home from "../../pages/home";
import Root from "../../Root";
import Apps from "../../pages/Apps";
import Installation from "../../pages/Installation";
import NotFound404 from "../error/NotFound404";
import AppInfo from "../../pages/AppInfo";
import AppNotFound from "../error/AppNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/", loader: ()=> fetch("/TrendingApps.json"), Component: Home },
      { path: "apps", loader: ()=> fetch("/AllApps.json"), Component: Apps },
      { path: "installation", loader: ()=> fetch("/AllApps.json"), Component: Installation },
      { path: '/apps/:id', loader: ()=> fetch("/AllApps.json"), Component:AppInfo, errorElement:<AppNotFound></AppNotFound>},
      { path: '*', Component:NotFound404}
    ],
  },
]);
