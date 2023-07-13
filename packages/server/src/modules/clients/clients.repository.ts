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
            console.log("Clients Table Synced")
        })
    }

    async addClient(args: IAddClientArgs): Promise<IClientBase | undefined> {
        const newClient: IClientBase = {
            id: nanoid(),
            name: args.name,
            isActive: args.isActive,
            defaultPayment: args.defaultPayment,
            userId: args.userId ?? this.requestContext.userId,
        }

        let result;

        try {
            result = await this.ClientTable.create(newClient);
        }
        catch(error: any) {
            console.log(error)
        }


        return result?.toJSON();
    }

}
