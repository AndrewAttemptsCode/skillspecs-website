import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

export default routes;
