import { IGetSessionArgs, ISession } from "@iot/shared";
import { IMongoRepository } from "../../types";

export interface ISessionRepository extends IMongoRepository<ISession> {
    getSessions(args: IGetSessionArgs): Promise<Array<ISession>>;
}

export interface ISessionService {
    getSessions(args: IGetSessionArgs): Promise<Array<ISession>>;
}