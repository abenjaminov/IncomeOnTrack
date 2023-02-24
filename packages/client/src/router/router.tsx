import {createBrowserRouter} from "react-router-dom";
import {LoginLayout, MainLayout} from "../layouts";

export const mainRouter = createBrowserRouter([{
    path: "/login",
    element: <LoginLayout/>,
}, {
        path: "/",
        element: <MainLayout/>
}])
