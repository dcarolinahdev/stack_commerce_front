import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/", element:<Index/>},
            { path: "/index", element: <Index /> },
            { path: "/home", element: <Index /> },

        ]
    }
])

export default router;