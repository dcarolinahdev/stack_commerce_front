import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import SignIn from "../pages/Signln";
import Register from "./Register.jsx";
import NotAllowed from "./NotAllowed";
import Cart from "./Cart";
import Category from "./Category";
import Admin from "./Admin";
import Category_login from "./Category_login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/index", element: <Index /> },
      { path: "/home", element: <Index /> },
      { path: "/register", element: <Register /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/cart", element: <Cart /> },
      { path: "/category", element: <Category /> },
      { path: "/admin", element: <Admin /> },
      { path: "/category_login", element: <Category_login />},
      { path: "/not-allowed", element: <NotAllowed /> },
    ],
  },
]);

export default router;
