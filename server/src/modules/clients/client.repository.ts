import { inject, injectable } from "inversify";
import { Model } from "mongoose";
import { MongoRepository } from "../../repositories/mongo.repository";
import { CollectionNames, IMongoConnection, IRequestContext } from "../../types";
import { ClientModel } from "./client.model";
import { InjectionTokens } from "../../config";
import { IClientRepository, IDebtObject } from "./client.types";
import { nanoid } from "nanoid";
import { IClient, ICreateClient, IGetClientsArgs, PaymentState } from "@iot/shared";

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

        filter["userId"] = this.requestContext.user.userId;

        if(args.filterText) {
            filter['name'] = {
                $regex: args.filterText
            }
        }

        const aggregation = this.model.aggregate<IClient>().match(filter);

        const result = await aggregation.exec();

        if(args.includeDebt) {
            const debtHours = await this.model.aggregate<IDebtObject>().lookup({
                from: CollectionNames.sessions,
                localField: 'id',
                foreignField: 'client.id',
                as: 'sessions',
                pipeline: [
                    {
                        $match: {
                            "paymentState": "owed"
                        }
                    }
                ]
            }).project({
                "_id": 0,
                "id": 1,
                debtHours: {"$sum": "$sessions.timeInHours" }
            }).exec();

            result.forEach(client => {
                const debtObject = debtHours.find(x => x.id === client.id);
                client.debt = debtObject.debtHours * client.paymentPerHour;
            })
        }

        return result;
    }
}