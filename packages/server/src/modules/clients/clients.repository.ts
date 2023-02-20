import {IRequestContext, RepositoryBase} from "../../common";
import {IAddClientArgs, IClientBase } from "@income-on-track/shared";
import {IClientsRepository, IGetClientsFromRepoArgs} from "./clients.interface";
import {FilterQuery} from "mongoose";
import {inject, injectable} from "inversify";
import {ClientModel} from "./client.model";
import {nanoid} from "nanoid";
import {InjectionTokens} from "../../config";

@injectable()
export class ClientsRepository extends RepositoryBase<IClientBase, IGetClientsFromRepoArgs> implements IClientsRepository {
    constructor(
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext
    ) {
        super(ClientModel);
    }
    buildFilterInternal(args: IGetClientsFromRepoArgs): FilterQuery<IClientBase> {
        const filter: FilterQuery<IClientBase> = {
            userId: args.userId
        };

        if(args.isActive !== undefined) {
            filter.isActive = args.isActive;
        }

        return filter;
    }

    async addClient(args: IAddClientArgs): Promise<void> {
        const newClient: IClientBase = {
            id: nanoid(),
            modifiedDate: new Date(),
            creationDate: new Date(),
            name: args.name,
            isActive: args.isActive,
            payment: args.payment,
            userId: this.requestContext.userId
        }

        await this.model.create(newClient);
    }

}