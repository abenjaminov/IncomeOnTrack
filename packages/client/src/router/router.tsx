import {createBrowserRouter} from "react-router-dom";
import {LoginLayout, MainLayout} from "../layouts";
import {ClientsView} from "../layouts/main/components/clients-view/ClientsView";
import {SessionsView} from "../layouts/main/components/sessions-view/SessionsView";
import {CalendarView} from "../layouts/main/components/calendar-view/CalendarView";
import {HomeView} from "../layouts/main/components/home-view/HomeView";
import {DashboardView} from "../layouts/main/components/dashboard-view/DashboardView";

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
            element: <HomeView />
        },
        {
            path: Routes.dashboard,
            element: <DashboardView />
        }, {
            path: Routes.sessions,
            element: <SessionsView />
        }, {
            path: Routes.clients,
            element: <ClientsView />
        }, {
            path: Routes.calendar,
            element: <CalendarView />
        }
    ]
}])
