import {IGetObjectsResult, IGetUsersArgs, IUserBase} from "@income-on-track/shared";
import {IRepositoryBase} from "../../common";

export interface ICreateUserArgs {
    userName: string;
    email: string;
    saltedPassword: string;
}

export interface IUsersService {
    createUser(args: ICreateUserArgs): Promise<void>;
    getUsers(args: IGetUsersArgs): Promise<any>;
    getUser(args: IGetUsersArgs): Promise<IUser | undefined>;
}

export interface IUserRepository {
    createUser(args: ICreateUserArgs): Promise<void>
}

export type IUser = IUserBase & {
    saltedPassword: string;
    isVerified: boolean;
    isActive: boolean;
}

export type IGetUserResult = IGetObjectsResult & {
    objects: Array<IUser>
}
