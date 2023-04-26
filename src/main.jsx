import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main.jsx";
import Home from "./components/Home.jsx";
import Flights from "./components/Flights";
import CarRental from "./components/CarRental";
import Hotels from "./components/Hotels";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRouter from "./routers/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/stay",
        element: <Hotels></Hotels>,
      },
      {
        path: "/flights",
        element: <Flights></Flights>,
      },
      {
        path: "/carrental",
        element: <PrivateRouter><CarRental></CarRental></PrivateRouter>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
