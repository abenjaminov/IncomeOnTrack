import {ISessionsRepository} from "./sessions.interface";
import {inject, injectable} from "inversify";
import {IDBService, TableNames} from "../../common";
import {InjectionTokens} from "../../config";
import {SessionModel} from "./sessions.model";

@injectable()
export class SessionsRepository implements ISessionsRepository {
    constructor(
      @inject(InjectionTokens.dbService) private dbService: IDBService
    ) {
        this.dbService.getDatabase().define(TableNames.sessions, SessionModel)
    }
}
