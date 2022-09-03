import 'reflect-metadata';
import 'dotenv-extended/config';
import { createServer } from './config/server';
import express from 'express';

const app = createServer();

const { PORT } = process.env;

const parentApp = express()
parentApp.use('/api', app);

parentApp.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`);
});
