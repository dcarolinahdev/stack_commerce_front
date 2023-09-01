import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Singln from "../pages/Singln.jsx";
import Resgister from "../pages/Resgister.jsx"
import Cart from "./Cart";
import Category_login from "./Category_login";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/", element:<Index/>},
            { path: '/register', element: <Resgister />},
            { path: '/singin', element: <Singln/> },
            { path: "/cart", element: <Cart /> },
            { path: "/category_login", element: <Category_login /> },


        ]
    }
])

export default router;