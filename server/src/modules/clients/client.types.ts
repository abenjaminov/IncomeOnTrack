import { ICreateClient, IGetClientsArgs } from "@iot/shared";
import { IMongoRepository } from "../../types";
import { IClient } from "./client.model";

export interface IClientService {
    getClients(args: IGetClientsArgs): Promise<Array<IClient>>
    create(args: ICreateClient): Promise<void>
}

export interface IClientRepository extends IMongoRepository<IClient>{
    create(args: ICreateClient): Promise<void>
}