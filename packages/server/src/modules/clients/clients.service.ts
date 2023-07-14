import {IClientsRepository, IClientsService} from "./clients.interface";
import {IAddClientArgs, IClient, IGetClientsResult, IGetClientsArgs} from "@income-on-track/shared";
import {inject, injectable} from "inversify";
import {InjectionTokens} from "../../config";
import {IRequestContext} from "../../common";

@injectable()
export class ClientsService implements IClientsService {
    constructor(
        @inject(InjectionTokens.clientsRepository) private clientRepo: IClientsRepository,
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext
    ) {
    }

    async addClient(args: IAddClientArgs): Promise<IClient | undefined> {
        return this.clientRepo.addClient(args);
    }

    async getClients(args: IGetClientsArgs): Promise<IGetClientsResult> {
        const result = await this.clientRepo.getClients({
            ...args,
            userId: this.requestContext.userId || args.userId
        });

        return result;
    }

}
