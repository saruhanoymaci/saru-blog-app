import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Layout from "./layouts/Layout";
import Profile from "./pages/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, 
        children: [
            { index: true, element: <Home /> },
            { path: "*", element: <NotFound /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
    {
       path: "/login",
       element: <Login />, 
    },
    {
        path: "/register",
        element: <Register />,
    }
]);

export default router;