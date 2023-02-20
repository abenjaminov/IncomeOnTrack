import container from './container';
import {InversifyExpressServer} from "inversify-express-utils";
import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import methodOverride from 'method-override';
import compression from 'compression';

export const createServer = () => {
    const server = new InversifyExpressServer(container, null, null, null, null);
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

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(helmet());
    app.use(methodOverride());
    app.use(compression());
};