import { Model } from "mongoose";

export enum CollectionNames {
    users = 'users',
    clients = 'clients',
    sessions = 'sessions'
}

export interface IMongoRepository<T> {
    model:typeof Model<T>
}