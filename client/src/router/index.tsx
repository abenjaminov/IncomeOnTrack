import React from 'react';
import { useRoutes, RouteObject, HashRouter, Navigate } from 'react-router-dom';
import { DefaultRoute } from '../features/default/DefaultRoute';
import { LoginRoutes } from './login';

export * from './routes';

const routes: Array<RouteObject> = [
  {
    element: <DefaultRoute />,
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
