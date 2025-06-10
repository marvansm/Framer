import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import HomePage from "./Featured/Pages/Home/Page/Home";
import DetailPage from "./Featured/Pages/Detail/page/Detail";
import Register from "./Featured/Register/page/Register";
import Login from "./Featured/Login/page/Login";

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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
