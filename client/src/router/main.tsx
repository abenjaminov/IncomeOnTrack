import { RouteObject } from "react-router-dom";
import { LoginView } from "../features/login/login-view/LoginView";
import { MainLayout } from "../features/main/MainLayout";
import { Route } from "./routes";

export const MainRoutes: RouteObject = {
    element: <MainLayout />,
    path: '/home'
    // children: [
    //     {
    //         element: <LoginView />,
    //         path: Route.login,
    //     },
    // ],
}