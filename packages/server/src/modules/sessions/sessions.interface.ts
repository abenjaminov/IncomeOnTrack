import {ICreateSessionArgs, IGetSessionArgs, IGetSessionsResult, ISession} from "@income-on-track/shared";
import {IRepositoryBase} from "../../common";

export interface ISessionService {
    getSessions(args: IGetSessionArgs): Promise<IGetSessionsResult>
    addSession(args: ICreateSessionArgs): Promise<ISession | undefined>
}

export type ICreateSessionArgsInternal = ICreateSessionArgs & { userId: string }

export type IGetSessionArgsInternal = IGetSessionArgs & { userId: string }
export interface ISessionsRepository {
    getSessions(args: IGetSessionArgsInternal): Promise<IGetSessionsResult>
    addSession(args: ICreateSessionArgsInternal): Promise<ISession | undefined>
}
