import {IDBService, IRequestContext, TableNames} from "../../common";
import {IClientsRepository } from "./clients.interface";
import {inject, injectable} from "inversify";
import {nanoid} from "nanoid";
import {InjectionTokens} from "../../config";
import {ClientModel, ClientModelAttributes} from "./client.model";
import {Op, QueryTypes} from "sequelize";
import {IAddClientArgs, IClient, IGetClientsResult, IGetClientsArgs} from "@income-on-track/shared";
import {WhereOptions} from "sequelize/types/model";
import {GetClientsQuery} from "./client.queries";
import {BindOrReplacements} from "sequelize/types/dialects/abstract/query-interface";

@injectable()
export class ClientsRepository implements IClientsRepository {
    ClientTable;

    constructor(
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext,
        @inject(InjectionTokens.dbService) private dbService: IDBService
    ) {
        this.ClientTable = ClientModel.init(ClientModelAttributes, {
            sequelize: this.dbService.getDatabase(),
            tableName: TableNames.Client,
        })


        this.ClientTable.sync().then(() => {
            console.log("Clients Table Synced")
        })
    }

    async addClient(args: IAddClientArgs): Promise<IClient | undefined> {
        const newClient: IClient = {
            id: nanoid(),
            name: args.name,
            isActive: args.isActive,
            defaultPayment: args.defaultPayment,
            userId: args.userId ?? this.requestContext.userId,
        }

        let result;

        try {
            result = await this.ClientTable.create(newClient);
        }
        catch(error: any) {
            console.log(error)
        }


        return result?.toJSON();
    }

    async getClients(args: IGetClientsArgs): Promise<IGetClientsResult> {
        const replacements: BindOrReplacements = {}
        const whereQueries: string[] = [];

        if(args.ids) {
            whereQueries.push(`Client.id IN (:ids)`);
            replacements.ids = args.ids
        }

        if(args.isActive !== undefined) {
            whereQueries.push(`Client."isActive" = :isActive`);
            replacements.isActive = args.isActive;
        }

        if(args.filterText) {
            whereQueries.push(`Client.name ILIKE :name`);
            replacements.name = `%${args.filterText}%`
        }

        whereQueries.push(`Client."userId" = :userId`);
        replacements.userId = args.userId;

        const pageSize = args.pageSize ?? 10;
        const page = args.page ?? 0 ;

        const query = GetClientsQuery.replace('{{WHERE}}', whereQueries.length ? `WHERE ${whereQueries.join(' AND ')}` : '');

        try {
            const countClientsResult: Array<{count: number}> = await this.dbService.getDatabase().query(`SELECT COUNT(*) FROM (${query}) as clients`, {
                type: QueryTypes.SELECT,
                replacements
            })

            const queryWithPaging = `${query} LIMIT :limit OFFSET :offset`
            replacements.limit = pageSize;
            replacements.offset = page * pageSize;

            const clientsResult = await this.dbService.getDatabase().query<IClient>(queryWithPaging, {
                type: QueryTypes.SELECT,
                replacements
            })

            return {
                count: countClientsResult[0].count,
                clients: clientsResult
            }
        }
        catch(error: any) {
            console.log(error)
            throw error;
        }

    }
}
