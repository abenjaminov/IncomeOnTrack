import { inject, injectable } from "inversify";
import mongoose, { Connection } from "mongoose";
import { ILog, IMongoConnection } from "../types";
import { InjectionTokens } from "../config";

@injectable()
export class MongoConnection implements IMongoConnection {
    public connection: Connection;
    
    constructor(
        @inject(InjectionTokens.log) private log: ILog
    ) {
        if (!process.env.MONGO_URI) {
            this.log.error(`Connected to DB`);
            throw new Error('Missing DB URI');
          }
          this.connection = mongoose.createConnection(process.env.MONGO_URI);
          this.log.info("Connected to DB");
    }

    getConnection(): mongoose.Connection {
        return this.connection;
    }
}