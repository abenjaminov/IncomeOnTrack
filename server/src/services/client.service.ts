import { injectable } from "inversify";
import { IClient, IGetClientsArgs } from "../types";

@injectable()
export class ClientService {
    constructor() {

    }

    async get(args: IGetClientsArgs): Promise<IClient> {

    }
}