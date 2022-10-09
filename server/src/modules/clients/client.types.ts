import { IClient, ICreateClientArgs, IGetClientsArgs } from "@iot/shared";
import { IMongoRepository } from "../../types";

export interface IClientService {
    getClients(args: IGetClientsArgs): Promise<Array<IClient>>
    create(args: ICreateClientArgs): Promise<void>
}

export interface IClientRepository extends IMongoRepository<IClient>{
    create(args: ICreateClientArgs): Promise<void>
    getClients(args: IGetClientsArgs): Promise<Array<IClient>>;
}

export interface IDebtObject {
    id: string;
    debtHours: number;
}
