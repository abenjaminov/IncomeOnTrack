import {IAddClientArgs, IClient, IGetClientsResult, IGetClientsArgs} from "@income-on-track/shared";
import {IRepositoryBase} from "../../common";

export type IGetClientsFromRepoArgs = IGetClientsArgs & {
    userId: string
}

export interface IClientsService {
    getClients(args: IGetClientsArgs): Promise<IGetClientsResult>;
    addClient(args: IAddClientArgs): Promise<IClient | undefined>
}

export type IAddClientArgsInternal = IAddClientArgs & { userId: string }

export interface IClientsRepository {
    addClient(args: IAddClientArgsInternal): Promise<IClient | undefined>
    getClients(args: IGetClientsArgs): Promise<IGetClientsResult>
}
