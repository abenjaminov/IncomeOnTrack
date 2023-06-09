import {createBrowserRouter} from "react-router-dom";
import {LoginLayout, MainLayout} from "../layouts";
import {ClientsView} from "../layouts/main/components/clients-view/ClientsView";

export enum Routes {
    login = "/login",
    dashboard = "dashboard",
    clients = "clients",
    sessions = "sessions",
    calendar = "calendar",
    home = '/'
}

export const mainRouter = createBrowserRouter([{
    path: Routes.login,
    element: <LoginLayout/>,
}, {
    path: Routes.home,
    element: <MainLayout/>,
    children: [
        {
            path: '',
            element: <div>Home</div>
        },
        {
            path: Routes.dashboard,
            element: <div>Dashboard</div>
        }, {
            path: Routes.sessions,
            element: <div>sessions</div>
        }, {
            path: Routes.clients,
            element: <ClientsView />
        }, {
            path: Routes.calendar,
            element: <div>Calendar</div>
        }
    ]
}])