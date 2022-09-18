import { Connection } from "mongoose";

export interface IMongoConnection {
    getConnection(): Connection
}