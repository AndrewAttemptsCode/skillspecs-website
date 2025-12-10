import { createBrowserRouter } from "react-router-dom";
import Videos from "../components/Videos";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Videos />,
  },
]);

export default routes;
