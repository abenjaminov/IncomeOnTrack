import {IGetUsersArgs} from "@income-on-track/shared";
import {IUsersService} from "./users.interface";
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
                creationDate: new Date(),
                modifiedDate: new Date()
            }]
        }
    }
}