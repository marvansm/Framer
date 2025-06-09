import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import HomePage from "./Featured/Pages/Home/Page/Home";
import DetailPage from "./Featured/Pages/Detail/page/Detail";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
        
      },
    ],
  },
]);
