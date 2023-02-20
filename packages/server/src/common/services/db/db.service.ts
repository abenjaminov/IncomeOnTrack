import { injectable } from 'inversify';
import mongoose, { Connection, Model } from 'mongoose';
import {IDBService} from "./db.interface";

@injectable()
export class DBService implements IDBService {
    public connection: Connection;
    constructor() {
        if (!process.env.MONGO_URI) {
            console.error(`${DBService.name} - Connected to DB`);
            throw new Error('Missing DB URI');
        }
        this.connection = mongoose.createConnection(process.env.MONGO_URI);
        console.info(`${DBService.name} - Connected to DB`);
    }

    public getRepository<T>(model: Model<T>): Model<T> {
        return this.connection.models[model.collection.name] || this.connection.model<T>(model.collection.name, model.schema);
    }
}
