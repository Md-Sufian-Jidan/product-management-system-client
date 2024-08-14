import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);