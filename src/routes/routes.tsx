import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SiteLayout from "../components/SiteLayout";
import VideosPage from "../pages/VideosPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    element: <SiteLayout />,
    children: [
      {
        path: "videos",
        element: <VideosPage />,
      },
      {
        path: "livestream",
        loader: () => {
          window.location.href="https://www.twitch.tv/skillspecs";
          return null;
        },
      },
    ],
  },
]);

export default routes;
