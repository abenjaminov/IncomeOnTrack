import { IGetUsersArgs } from "@income-on-track/shared";
import {IUser, IUsersService} from "./users.interface";
import {injectable} from "inversify";

@injectable()
export class UsersService implements IUsersService{
    constructor() {
    }

    async getUsers(args: IGetUsersArgs): Promise<any> {
        return {
            count: 1,
            object: [{
                id: 'asdasd',
                userName: 'Asaf',
                email: 'abenjaminov@gmail.com',
                saltedPassword: '$2b$10$zDcFiPureiTdGsItmTgDheqvl69ZidBQbGVCQwSpm1obWlZ/5I.Kq',
                isVerified: true,
                creationDate: new Date(),
                modifiedDate: new Date()
            }]
        }
    }

    async getUser(args: IGetUsersArgs): Promise<IUser | undefined> {
        const users = await this.getUsers(args);

        if(!users.count || users.count > 1) return;

        return users.objects[0];
    }
}