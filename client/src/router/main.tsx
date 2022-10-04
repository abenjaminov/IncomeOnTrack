import { RouteObject } from "react-router-dom";
import { CalendarView } from "../features/main/components";
import { ClientsView } from "../features/main/components/clients-view/ClientsView";
import { DashboardView } from "../features/main/components/dashboard-view/DashboardView";
import { SessionsView } from "../features/main/components/sessions-view/SessionsView";
import { MainLayout } from "../features/main/MainLayout";
import { Route } from "./routes";

export const MainRoutes: RouteObject = {
    element: <MainLayout />,
    path: Route.home,
    children: [
        {
            element: <CalendarView />,
            path: Route.calendar,
        },
        {
            element: <DashboardView />,
            path: 'dashboard',
        },
        {
            element: <ClientsView />,
            path: Route.clients,
        },
        {
            element: <SessionsView />,
            path: Route.sessions,
        },
    ],
}