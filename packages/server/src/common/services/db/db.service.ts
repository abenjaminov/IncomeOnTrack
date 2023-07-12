import { injectable } from 'inversify';
import {IDBService} from "./db.interface";
import {Sequelize} from 'sequelize';

@injectable()
export class DBService implements IDBService {
    database: Sequelize;

    constructor() {
        if (!process.env.DB_CONNECTION_STRING) {
            throw new Error('Missing DB URI');
        }
        this.database = new Sequelize(process.env.DB_CONNECTION_STRING);

        this.database.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        })
    }

    getDatabase(): Sequelize {
        return this.database;
    }
}
