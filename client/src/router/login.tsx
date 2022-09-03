import { RouteObject } from "react-router-dom";
import { LoginView } from "../features/login/login-view/LoginView";
import { LoginLayout } from '../features/login/LoginLayout';
import { Route } from "./routes";

export const LoginRoutes: RouteObject = {
    element: <LoginLayout />,
    children: [
        {
            element: <LoginView />,
            path: Route.login,
        },
    ],
}