import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ChartPage from "../pages/Home/Chart/ChartPage";
import OtherPage from "../pages/Home/Others/OtherPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="chart" replace />,
      },
      {
        path: "chart",
        element: <ChartPage />,
      },
      {
        path: "Whook",
        element: <OtherPage />,
      },
      {
        path: "event",
        element: <OtherPage />,
      },
      {
        path: "news",
        element: <OtherPage />,
      },
      {
        path: "store",
        element: <OtherPage />,
      },
      {
        path: "charge",
        element: <OtherPage />,
      },
    ],
  },
]);
