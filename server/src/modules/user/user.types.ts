import { IGetUsersArgs } from "@iot/shared";
import { IMongoRepository } from "../../types";
import { IUser } from "./user.model";

export interface IGetUserArgs {
    email: string;
}

export interface ICreateUserArgs {
    email: string;
    password:string;
    firstName: string;
    lastName: string;
}

export interface IUserService {
    getUsers(args: IGetUsersArgs): Promise<Array<IUser>>;
    createUser(args: ICreateUserArgs) : Promise<void>
}

export interface IUserRepository extends IMongoRepository<IUser> {
    getUsers(args: IGetUsersArgs): Promise<Array<IUser>>;
}
