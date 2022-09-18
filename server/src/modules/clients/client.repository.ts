import { inject, injectable } from "inversify";
import { MongoRepository } from "../../repositories/mongo.repository";
import { IMongoConnection, IRequestContext } from "../../types";
import { ClientModel, IClient } from "./client.model";
import { Model } from "mongoose";
import { ICreateClient, IGetClientsArgs } from "@iot/shared";
import { InjectionTokens } from "../../config";
import { IClientRepository } from "./client.types";
import { nanoid } from "nanoid";

@injectable()
export class ClientRepository extends MongoRepository<IClient> implements IClientRepository {
    protected getModel(): Model<IClient> {
        return ClientModel
    }

    constructor(
        @inject(InjectionTokens.connection) mongoConnection: IMongoConnection,
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext
    ) {
        super(mongoConnection)
    }

    async create(args: ICreateClient): Promise<void> {
        const query: IClient = {
            id: nanoid(),
            isActive: true,
            name: args.name,
            paymentPerHour: args.paymentPerHour,
            email: args.email,
            paymentMonthOffset: args.paymentMonthOffset,
            phoneNumber: args.phoneNumber,
            userId: this.requestContext.user.userId
        }

        await this.model.create(query);
    }

    async getClients(args: IGetClientsArgs): Promise<Array<IClient>> {
        let filter: any = {};

        if(args.userId) {
            filter["userId"] = args.userId;
        }

        if(args.filterText) {
            filter['name'] = {
                $regex: args.filterText
            }
        }

        if(args.includeDebt) {
            // TODO : Calculate debt
        }

        const result = await this.model.find(filter);

        return result;
    }
}