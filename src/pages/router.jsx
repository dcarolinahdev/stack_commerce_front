import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Cart from "./Cart";
import Category from "./Category";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/", element:<Index/>},
            { path: "/cart", element: <Cart /> },
            { path: "/category", element: <Category /> },
        ]
    }
])

export default router;