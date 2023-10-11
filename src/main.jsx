import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
 
import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import Banner from "./Components/Banner/Banner";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Banner></Banner>
      },
      {
        path:"/donation",
        element:<Donation></Donation>
      },
      {
        path:"/stat",
        element:<Statistics></Statistics>
      }
     
      
       
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
