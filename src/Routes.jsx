import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Root from "./Pages/Root";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/admin",
                element: <Admin></Admin>,

            }
        ]
    },

]);

export default Routes;