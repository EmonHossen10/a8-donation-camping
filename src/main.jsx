import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";

import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import Home from "./Components/Home/Home";
import Cards from "./Components/Cards/Cards";
import CardDetails from "./Components/CardDetails/CardDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "/cards",
        element: <Cards></Cards>,
      },
      {
        path: "/cards/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch(`/public/data.json`),
      },

      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/stat",
        element: <Statistics></Statistics>,
        loader: () => fetch("/public/data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
