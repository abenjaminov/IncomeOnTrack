import {RepositoryBase} from "../../common";
import {ICreateUserArgs, IUser, IUserRepository} from "./users.interface";
import {IGetUsersArgs} from "@income-on-track/shared";
import {UserModel} from "./users.model";
import {FilterQuery} from "mongoose";
import {injectable} from "inversify";
import {nanoid} from "nanoid";

@injectable()
export class UserRepository extends RepositoryBase<IUser, IGetUsersArgs> implements IUserRepository{
    constructor() {
        super(UserModel);
    }

    buildFilterInternal(args: IGetUsersArgs): FilterQuery<IUser> {
        const filter: FilterQuery<IUser> = {};

        if(args.email) {
            filter.email = args.email;
        }

        return filter;
    }

    async createUser(args: ICreateUserArgs): Promise<void> {
        const newUser: IUser = {
            id: nanoid(),
            userName: args.userName,
            email: args.email,
            creationDate: new Date(),
            modifiedDate: new Date(),
            isVerified: false,
            isActive: false,
            saltedPassword: args.saltedPassword
        }

        await this.model.create(newUser);
    }

}