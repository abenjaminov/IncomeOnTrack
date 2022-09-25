import { IGetSessionArgs, ISession, ISessionBase, IUpdateSessionArgs, PaymentState } from "@iot/shared";
import { IMongoRepository } from "../../types";

export interface ISessionRepository extends IMongoRepository<ISession> {
    getSessions(args: IGetSessionArgs): Promise<Array<ISession>>;
    addSession(session: ISession) : Promise<void>;
    updateSession(args: IUpdateSessionArgs): Promise<ISession>;
}

export interface ISessionService {
    getSessions(args: IGetSessionArgs): Promise<Array<ISession>>;
    addSession(session: ISessionBase) : Promise<void>;
    updateSession(args: IUpdateSessionArgs): Promise<ISession>
}