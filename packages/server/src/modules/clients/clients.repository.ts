import {IDBService, IRequestContext, TableNames} from "../../common";
import {IClientsRepository } from "./clients.interface";
import {inject, injectable} from "inversify";
import {nanoid} from "nanoid";
import {InjectionTokens} from "../../config";
import {ClientModel} from "./client.model";
import {Model, ModelCtor} from "sequelize";
import {IAddClientArgs, IClientBase} from "@income-on-track/shared";

@injectable()
export class ClientsRepository implements IClientsRepository {
    ClientTable: ModelCtor<Model<IClientBase>>;
    constructor(
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext,
        @inject(InjectionTokens.dbService) private dbService: IDBService
    ) {
        this.ClientTable = this.dbService.getDatabase().define(TableNames.clients, ClientModel, {
            timestamps: true,
            paranoid: true
        });

        this.ClientTable.sync().then(() => {
            console.log("User Table Created")
        })
    }

    async addClient(args: IAddClientArgs): Promise<void> {
        const newClient: IClientBase = {
            id: nanoid(),
            name: args.name,
            isActive: args.isActive,
            defaultPayment: args.defaultPayment,
            userId: this.requestContext.userId,
        }

        await this.ClientTable.create(newClient);
    }

}
