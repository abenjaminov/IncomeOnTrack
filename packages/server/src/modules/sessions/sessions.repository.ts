import {ICreateSessionArgsInternal, ISessionsRepository} from "./sessions.interface";
import {inject, injectable} from "inversify";
import {IDBService, TableNames} from "../../common";
import {InjectionTokens} from "../../config";
import {SessionModel, SessionModelAttributes} from "./sessions.model";
import { IGetSessionArgs, IGetSessionsResult, ISession} from "@income-on-track/shared";
import {nanoid} from "nanoid";

@injectable()
export class SessionsRepository implements ISessionsRepository {
    SessionsTable;

    constructor(
      @inject(InjectionTokens.dbService) private dbService: IDBService
    ) {
        this.SessionsTable = SessionModel.init(SessionModelAttributes, {
            sequelize: this.dbService.getDatabase(),
            tableName: TableNames.Session,
        });

        this.SessionsTable.sync().then(() => {
            console.log("Sessions Table Synced")
        })
    }

    async addSession(args: ICreateSessionArgsInternal) {
        const newSession: ISession = {
            id: nanoid(),
            clientId: args.clientId,
            date: args.date,
            payment: args.payment,
            notes: args.notes,
            datePayed: args.datePayed,
            issuedReceipt: args.issuedReceipt,
            userId: args.userId
        }

        let result;

        try {
            result = await this.SessionsTable.create(newSession);
        }
        catch(error: any) {
            console.log(error)
        }

        return result?.toJSON();
    }

    async getSessions(args: IGetSessionArgs): Promise<IGetSessionsResult> {
        const count = await this.SessionsTable.count();
        const sessions = await this.SessionsTable.findAll();

        return {
            count,
            sessions: sessions.map(client => client.toJSON())
        }
    }
}
