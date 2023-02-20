import {Model} from "mongoose";

export interface IDBService {
    getRepository<T>(model: Model<T>): Model<T>
}