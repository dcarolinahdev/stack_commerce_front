import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import SignIn from "../pages/Signln";
import Register from "./Register.jsx";
import NotAllowed from "./NotAllowed";
import Cart from "./Cart";
import Category from "./Category";
import Admin from "./Admin";

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
      { path: "/not-allowed", element: <NotAllowed /> },
      { path: "/cart", element: <Cart /> },
      { path: "/category", element: <Category /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
]);

export default router;
