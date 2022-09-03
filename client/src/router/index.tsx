import React from 'react';
import { useRoutes, RouteObject, HashRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../features/main/MainLayout';
import { LoginRoutes } from './login';

export * from './routes';

const routes: Array<RouteObject> = [
  {
    element: <MainLayout />,
    path: '/'
  },
  LoginRoutes
];

export const Routes: React.FC = () => {
  return useRoutes(routes);
};

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};
