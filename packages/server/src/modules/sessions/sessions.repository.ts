import {ICreateSessionArgsInternal, IGetSessionArgsInternal, ISessionsRepository} from "./sessions.interface";
import {inject, injectable} from "inversify";
import {Consts, IDBService, TableNames} from "../../common";
import {InjectionTokens} from "../../config";
import { SessionModel, SessionModelAttributes} from "./sessions.model";
import {IGetSessionsResult, ISession, ISessionView} from "@income-on-track/shared";
import {nanoid} from "nanoid";
import {BindOrReplacements} from "sequelize/types/dialects/abstract/query-interface";
import {QueryTypes} from "sequelize";
import {GetSessionsQuery} from "./session.queries";

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

    async createOrUpdate(args: ICreateSessionArgsInternal) {
        const newSession: ISession = {
            id: args.id ?? nanoid(),
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
            const [_result, isCreated] = await this.SessionsTable.upsert(newSession, {
                returning: true
            });

            result = _result.toJSON();
        }
        catch(error: any) {
            console.log(error)
        }

        return result as ISession;
    }

    async getSessions(args: IGetSessionArgsInternal): Promise<IGetSessionsResult> {
        const replacements: BindOrReplacements = {}
        const whereQueries: string[] = [];

        if(args.ids){
            whereQueries.push(`se.id IN (:ids)`);
            replacements.ids = args.ids
        }

        if(args.clientId){
            whereQueries.push(`se."clientId" = :clientId`);
            replacements.clientId = args.clientId
        }

        if(args.dateRange) {
            whereQueries.push(`se.date BETWEEN :fromDate AND :toDate`);
            replacements.fromDate = args.dateRange.fromDate
            replacements.toDate = args.dateRange.toDate
        }

        if(args.isFuture) {
            const now = new Date();
            whereQueries.push(`se.date > :now`);
            replacements.now = now
        }

        if(args.isPayed) {
            whereQueries.push(`se."datePayed" IS NOT NULL`);
        }

        whereQueries.push(`se."userId" = :userId`);
        replacements.userId = args.userId

        const pageSize = args.pageSize ?? 10;
        const page = args.page ?? 0 ;

        const query = GetSessionsQuery.replace(Consts.repositories.whereClausePlaceholder, whereQueries.length ? `WHERE ${whereQueries.join(' AND ')}` : '');

        const sessionsCountResult: Array<{count: number}> = await this.dbService.getDatabase().query(`SELECT COUNT(*) FROM (${query}) as sessions_count`, {
            type: QueryTypes.SELECT,
            replacements
        })

        const queryWithPaging = args.ignorePaging ? query: `${query} LIMIT :limit OFFSET :offset`;

        if(!args.ignorePaging) {
            replacements.limit = pageSize;
            replacements.offset = page * pageSize;
        }


        const sessionsResult = await this.dbService.getDatabase().query<ISessionView>(queryWithPaging, {
            type: QueryTypes.SELECT,
            replacements
        })

        return {
            count: sessionsCountResult[0].count,
            sessions: sessionsResult
        }
    }
}
