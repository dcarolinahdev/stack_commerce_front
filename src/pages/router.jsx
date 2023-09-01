import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import SignIn from "../pages/Signln"
import Register from "./Register.jsx"
import NotAllowed from "./NotAllowed";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/", element:<Index/>},
            { path: "/index", element: <Index /> },
            { path: "/home", element: <Index /> },
            { path: '/register', element: <Register />},
            { path: '/signIn', element: <SignIn/> },
            {path:"/not-allowed",element: <NotAllowed />},
        ]
    }
])

export default router;