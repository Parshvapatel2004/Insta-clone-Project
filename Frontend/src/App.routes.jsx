import { createBrowserRouter } from "react-router-dom";
import Login from "./Features/Auth/pages/Login";
import Register from "./Features/Auth/pages/Register";
import Feed from "./Features/post/pages/Feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
