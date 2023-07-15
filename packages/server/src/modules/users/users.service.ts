import {IGetUsersArgs} from "@income-on-track/shared";
import {ICreateUserArgs, IGetUsersResult, IUser, IUserRepository, IUsersService} from "./users.interface";
import {inject, injectable} from "inversify";
import {InjectionTokens} from "../../config";

@injectable()
export class UsersService implements IUsersService{
    constructor(
        @inject(InjectionTokens.userRepository) private userRepo : IUserRepository
    ) {
    }

    async getUsers(args: IGetUsersArgs): Promise<IGetUsersResult> {
        return this.userRepo.getUsers(args);
    }

    async getUser(args: IGetUsersArgs): Promise<IUser | undefined> {
        const users = await this.getUsers(args);

        if(!users.count || users.count > 1) return;

        return users.users[0];
    }

    async createUser(args: ICreateUserArgs): Promise<IUser | undefined> {
        return this.userRepo.createUser(args);
    }
}
