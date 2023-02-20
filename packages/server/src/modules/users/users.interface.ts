import {IGetUsersArgs, IUserBase} from "@income-on-track/shared";

export interface IUsersService {
    getUsers(args: IGetUsersArgs): Promise<any>;
    getUser(args: IGetUsersArgs): Promise<IUser | undefined>;
}

export type IUser = IUserBase & {
    saltedPassword: string;
    isVerified: boolean;
}