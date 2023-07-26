import 'reflect-metadata';
import 'dotenv-extended/config';
import { createServer } from './config/create-server';

const app = createServer();

const { PORT } = process.env;
console.log(process.env)
app.listen(process.env.PORT || 3000, () => {
    console .info(`Server listening on ${PORT}`);
});


