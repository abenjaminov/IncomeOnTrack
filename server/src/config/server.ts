import express from 'express';
import helmet from 'helmet';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './container';
import cors from 'cors';

export const createServer = () => {
  const server = new InversifyExpressServer(container);
  server.setConfig(app => bootstrapServer(app));
  const app = server.build();
  return app;
};

export const bootstrapServer = (app: express.Application) => {
  const corsOptions = {
    origin: [/iot/, 'http://127.0.0.1:1993','http://localhost:1993', 'https://income-on-track.vercel.app'],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
    maxAge: 3600,
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
};
