import {IGetUsersArgs} from "@income-on-track/shared";

export interface IUsersService {
    getUsers(args: IGetUsersArgs): Promise<any>
}