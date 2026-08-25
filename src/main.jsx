import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import BookPage from "./pages/book.jsx";
import "./styles/global.css";
import TodoApp from "./components/todo/TodoApp.jsx";
import ErrorPage from "./pages/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //chay component tuong ung
    errorElement: <ErrorPage />,
    // gan moi quan he cha con
    children: [
      //phần outlet sẽ hiển thị cái này khi ở trang chủ, cái này sẽ không hiển thị ở trang k
      {
        index: true,
        element: <TodoApp />,
      },
      //phần outlet sẽ hiển thị cái này khi ở trang users
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/books",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

// render: dịch code từ app đưa vào root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
