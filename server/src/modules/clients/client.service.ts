import { IClient, ICreateClient, IGetClientsArgs } from "@iot/shared";
import { inject, injectable } from "inversify";
import { InjectionTokens } from "../../config";
import { IClientRepository, IClientService } from "./client.types";

@injectable()
export class ClientService implements IClientService {
    constructor(
        @inject(InjectionTokens.clientRepository) private clientRepo: IClientRepository
    ){}
    
    async create(args: ICreateClient): Promise<void> {
        await this.clientRepo.create(args);
    }

    async getClients(args: IGetClientsArgs): Promise<IClient[]> {
        const result = await this.clientRepo.getClients(args);

        return result;
    }
}