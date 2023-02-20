import {IAddClientArgs, IClientBase, IGetClientBaseResult, IGetClientsArgs} from "@income-on-track/shared";
import {IRepositoryBase} from "../../common";

export type IGetClientsFromRepoArgs = IGetClientsArgs & {
    userId: string
}

export interface IClientsService {
    getClients(args: IGetClientsArgs): Promise<IGetClientBaseResult>;
    addClient(args: IAddClientArgs): Promise<void>
}

export interface IClientsRepository extends IRepositoryBase<IClientBase, IGetClientsFromRepoArgs> {
    addClient(args: IAddClientArgs): Promise<void>
}