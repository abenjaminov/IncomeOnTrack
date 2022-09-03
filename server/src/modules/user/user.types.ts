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
    getUser(args: IGetUserArgs) : Promise<IUser>;
    createUser(args: ICreateUserArgs) : Promise<void>
}
