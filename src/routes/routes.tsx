import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SiteLayout from "../components/SiteLayout";
import VideosPage from "../pages/VideosPage";
import AboutPage from "../pages/AboutPage";
import SocialsPage from "../pages/SocialsPage";

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
          window.location.replace("https://www.twitch.tv/skillspecs");
          return null;
        },
      },
      {
        path: "socials",
        element: <SocialsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default routes;
