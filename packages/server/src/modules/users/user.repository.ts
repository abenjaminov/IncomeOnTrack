import {ICreateUserArgs, IUser, IUserRepository} from "./users.interface";
import {injectable} from "inversify";
import {nanoid} from "nanoid";

@injectable()
export class UserRepository implements IUserRepository{
    constructor() {
    }

    async createUser(args: ICreateUserArgs): Promise<void> {
        const newUser: IUser = {
            id: nanoid(),
            userName: args.userName,
            email: args.email,
            isVerified: false,
            isActive: false,
            saltedPassword: args.saltedPassword
        }

        //await this.model.create(newUser);
    }

}
