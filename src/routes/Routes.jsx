import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router