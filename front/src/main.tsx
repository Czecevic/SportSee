import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Users } from "./pages/Users";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { DataProvider } from "./components/DataContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: `/user/:id`,
    element: <Users />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
