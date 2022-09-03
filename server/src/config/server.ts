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
    origin: [/overwolf/, /prodrops/],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
    maxAge: 3600,
  };

  app.use('/', (req,res,next) => {
    res.send("Hello").end();
  })

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
};
