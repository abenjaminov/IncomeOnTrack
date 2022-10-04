import { IClient, ICreateClient, IGetClientsArgs } from "@iot/shared";
import { IMongoRepository } from "../../types";

export interface IClientService {
    getClients(args: IGetClientsArgs): Promise<Array<IClient>>
    create(args: ICreateClient): Promise<void>
}

export interface IClientRepository extends IMongoRepository<IClient>{
    create(args: ICreateClient): Promise<void>
    getClients(args: IGetClientsArgs): Promise<Array<IClient>>;
}

export interface IDebtObject {
    id: string;
    debtHours: number
}
