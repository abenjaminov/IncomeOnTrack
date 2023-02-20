import {IClientsRepository, IClientsService} from "./clients.interface";
import {IAddClientArgs, IClientBase, IGetClientBaseResult, IGetClientsArgs} from "@income-on-track/shared";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";
import {IRequestContext} from "../../common";

export class ClientsService implements IClientsService {
    constructor(
        @inject(InjectionTokens.clientsRepository) private clientRepo: IClientsRepository,
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext
    ) {
    }

    async addClient(args: IAddClientArgs): Promise<void> {
        return this.clientRepo.addClient(args);
    }

    async getClients(args: IGetClientsArgs): Promise<IGetClientBaseResult> {
        const result = await this.clientRepo.getObjects({
            ...args,
            userId: this.requestContext.userId
        });

        return {
            count: result.count,
            objects: result.objects as Array<IClientBase>
        }
    }

}