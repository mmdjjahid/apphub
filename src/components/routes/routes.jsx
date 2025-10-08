import { createBrowserRouter } from "react-router";
import Home from "../../pages/home";
import Root from "../../Root";
import Apps from "../../pages/Apps";
import Installation from "../../pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/", loader: ()=> fetch("/TrendingApps.json"), Component: Home },
      { path: "apps", loader: ()=> fetch("/AllApps.json"), Component: Apps },
      { path: "installation", Component: Installation },
    ],
  },
]);
