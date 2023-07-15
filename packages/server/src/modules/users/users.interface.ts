import {IGetObjectsResult, IGetUsersArgs, IUserBase} from "@income-on-track/shared";
import {IRepositoryBase} from "../../common";

export interface ICreateUserArgs {
    username: string;
    email: string;
    saltedPassword: string;
}

export interface IUsersService {
    createUser(args: ICreateUserArgs): Promise<IUser | undefined>;
    getUsers(args: IGetUsersArgs): Promise<any>;
    getUser(args: IGetUsersArgs): Promise<IUser | undefined>;
}

export interface IUserRepository {
    createUser(args: ICreateUserArgs): Promise<IUser | undefined>
    getUsers(args: IGetUsersArgs): Promise<IGetUsersResult>
}

export type IUser = IUserBase & {
    saltedPassword: string;
    isVerified: boolean;
    isActive: boolean;
}

export type IGetUsersResult = Omit<IGetObjectsResult, 'objects'> & {
    users: Array<IUser>
}
