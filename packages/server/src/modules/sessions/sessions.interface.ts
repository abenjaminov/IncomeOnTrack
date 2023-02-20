import {IGetSessionArgs, IGetSessionsResult, ISessionBase} from "@income-on-track/shared";
import {IRepositoryBase} from "../../common";

export interface ISessionService {
    getSessions(args: IGetSessionArgs): Promise<IGetSessionsResult>
}

export interface ISessionsRepository extends IRepositoryBase<ISessionBase, IGetSessionArgs> {}