import React from 'react';
import { useRoutes, RouteObject, HashRouter, Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { CalendarView } from '../features/main/components';
import { MainLayout } from '../features/main/MainLayout';
import { LoginRoutes } from './login';
import { MainRoutes } from './main';
import { Route } from './routes';

export * from './routes';

const routes: Array<RouteObject> = [
  MainRoutes,
  LoginRoutes
];

const router = createHashRouter(routes);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />
};
