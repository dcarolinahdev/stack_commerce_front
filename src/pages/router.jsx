import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Cart from "./Cart";
import Category_login from "./Category_login";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/", element:<Index/>},
            { path: "/index", element: <Index /> },
            { path: "/home", element: <Index /> },
            { path: "/cart", element: <Cart /> },
            { path: "/category_login", element: <Category_login /> },

        ]
    }
])

export default router;