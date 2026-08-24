import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import ProductPage from "./pages/product.jsx";
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,//chay component tuong ung
    // gan moi quan he cha con
    children: [
       {
    path: "/users",
    element: <UserPage/>
  },
   {
    path: "/products",
    element: <ProductPage/>
  }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
   {
    path: "/register",
    element: <RegisterPage/>
  }
]);

// render: dịch code từ app đưa vào root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);

