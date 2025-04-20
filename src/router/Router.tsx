import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@components/common/Layout/Layout";
import PageSwiper from "@pages/Home/PageSwiper/PageSwiper";

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
        element: <PageSwiper />,
      },
      {
        path: "whook",
        element: <PageSwiper />,
      },
      {
        path: "event",
        element: <PageSwiper />,
      },
      {
        path: "news",
        element: <PageSwiper />,
      },
      {
        path: "store",
        element: <PageSwiper />,
      },
      {
        path: "charge",
        element: <PageSwiper />,
      },
    ],
  },
]);
