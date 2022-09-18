import { inject, injectable } from "inversify";
import { IMongoConnection, IMongoRepository } from "../types";
import { InjectionTokens } from "../config";
import { MongoConnection } from "./mongo.connection";
import { Model } from "mongoose";

@injectable()
export abstract class MongoRepository<T> implements IMongoRepository<T> {
    modelRepo: typeof Model<T>;

    protected abstract getModel(): Model<T>;

    constructor(
        @inject(InjectionTokens.connection) private mongoConnection: IMongoConnection
    ) {
        const model = this.getModel();
        const connection = this.mongoConnection.getConnection();
        this.modelRepo = connection.models[model.collection.name] || connection.model<T>(model.collection.name, model.schema);   
    }

    get model() {
        return this.modelRepo;
    }
}