import {IGetObjectsResult, IGetUsersArgs} from "@income-on-track/shared";
import {ICreateUserArgs, IGetUserResult, IUser, IUserRepository, IUsersService} from "./users.interface";
import {inject, injectable} from "inversify";
import {InjectionTokens} from "../../config";

@injectable()
export class UsersService implements IUsersService{
    constructor(
        @inject(InjectionTokens.userRepository) private userRepo : IUserRepository
    ) {
    }

    async getUsers(args: IGetUsersArgs): Promise<IGetUserResult> {
        const result = await this.userRepo.getObjects(args);

        return {
            count: result.count,
            objects: result.objects as Array<IUser>
        };
    }

    async getUser(args: IGetUsersArgs): Promise<IUser | undefined> {
        const users = await this.getUsers(args);

        if(!users.count || users.count > 1) return;

        return users.objects[0];
    }

    createUser(args: ICreateUserArgs): Promise<void> {
        return this.userRepo.createUser(args);
    }
}