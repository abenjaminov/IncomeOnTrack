import {IDBService, IRequestContext, TableNames} from "../../common";
import {IAddClientArgs, IClientBase } from "@income-on-track/shared";
import {IClientsRepository } from "./clients.interface";
import {inject, injectable} from "inversify";
import {nanoid} from "nanoid";
import {InjectionTokens} from "../../config";
import {ClientModel} from "./client.model";

@injectable()
export class ClientsRepository implements IClientsRepository {
    constructor(
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext,
        @inject(InjectionTokens.dbService) private dbService: IDBService
    ) {
        this.dbService.getDatabase().define(TableNames.clients, ClientModel)
    }

    async addClient(args: IAddClientArgs): Promise<void> {
        const newClient: IClientBase = {
            id: nanoid(),
            modifiedDate: new Date(),
            creationDate: new Date(),
            name: args.name,
            isActive: args.isActive,
            payment: args.payment,
            userId: this.requestContext.userId,
            isSalary: args.isSalary
        }

        //await this.model.create(newClient);
    }

}
