import { injectable } from 'inversify';
import {IDBService} from "./db.interface";
import {Sequelize} from 'sequelize';

@injectable()
export class DBService implements IDBService {
    database: Sequelize;

    constructor() {
        this.database = new Sequelize({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            dialect: 'postgres',
            dialectOptions: process.env.NODE_ENV === 'production' ? {
                decimalNumbers: true,
                ssl: {
                    rejectUnauthorized: false
                }
            } : { decimalNumbers: true },
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT),
            logging: false,
        });

        this.database.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        })
    }

    getDatabase(): Sequelize {
        return this.database;
    }
}
