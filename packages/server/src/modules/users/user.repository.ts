import {ICreateUserArgs, IGetUsersResult, IUser, IUserRepository} from "./users.interface";
import {inject, injectable} from "inversify";
import {nanoid} from "nanoid";
import {InjectionTokens} from "../../config";
import {Consts, IDBService, TableNames} from "../../common";
import {UserModel, UserModelAttributes} from "./users.model";
import {IGetUsersArgs} from "@income-on-track/shared";
import {BindOrReplacements} from "sequelize/types/dialects/abstract/query-interface";
import {GetUsersQuery} from "./user.queries";
import {QueryTypes} from "sequelize";

@injectable()
export class UserRepository implements IUserRepository{
    UsersTable;
    constructor(
      @inject(InjectionTokens.dbService) private dbService: IDBService
    ) {
        this.UsersTable = UserModel.init(UserModelAttributes,{
            sequelize: this.dbService.getDatabase(),
            tableName: TableNames.User
        })

        this.UsersTable.sync().then(() => {
            console.log("Users Table Synced")
        });
    }

    async createUser(args: ICreateUserArgs): Promise<IUser | undefined> {
        const newUser: IUser = {
            id: nanoid(),
            username: args.username,
            email: args.email,
            isVerified: false,
            isActive: false,
            saltedPassword: args.saltedPassword
        }

        let result;

        try {
            result = await this.UsersTable.create(newUser);
        }
        catch(error: any) {
            console.log(error)
        }

        return result?.toJSON();
    }

    async getUsers(args: IGetUsersArgs): Promise<IGetUsersResult> {
        const replacements: BindOrReplacements = {}
        const whereQueries: string[] = [];

        if(args.ids) {
            whereQueries.push(`usr.id IN (:ids)`);
            replacements.ids = args.ids
        }

        if(args.email) {
            whereQueries.push(`usr.email = :email`);
            replacements.email = args.email
        }

        if(args.filterText) {
            whereQueries.push(`usr.username ILIKE :filterText`);
            replacements.filterText = `%${args.filterText}%`
        }

        const pageSize = args.pageSize ?? 10;
        const page = args.page ?? 0 ;

        const query = GetUsersQuery.replace(Consts.repositories.whereClausePlaceholder, whereQueries.length ? `WHERE ${whereQueries.join(' AND ')}` : '');

        const usersCountResult: Array<{count: number}> = await this.dbService.getDatabase().query(`SELECT COUNT(*) FROM (${query}) as users_count`, {
            type: QueryTypes.SELECT,
            replacements
        })

        const queryWithPaging = args.ignorePaging ? query: `${query} LIMIT :limit OFFSET :offset`;

        if(!args.ignorePaging) {
            replacements.limit = pageSize;
            replacements.offset = page * pageSize;
        }


        const usersResult = await this.dbService.getDatabase().query<IUser>(queryWithPaging, {
            type: QueryTypes.SELECT,
            replacements
        })

        return {
            count: usersCountResult[0].count,
            users: usersResult
        }
    }
}
