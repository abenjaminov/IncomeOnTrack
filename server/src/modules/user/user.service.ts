import { ICreateUserArgs, IUserRepository, IUserService } from "./user.types";
import { IUser } from "./user.model";
import { hash } from "bcrypt";
import { nanoid } from "nanoid";
import { inject, injectable } from "inversify";
import { InjectionTokens } from "../../config";
import { IGetUsersArgs } from "@iot/shared";

@injectable()
export class UserService implements IUserService {

    constructor(
        @inject(InjectionTokens.userRepo) private userRepo: IUserRepository
    ){}

    async createUser(args: ICreateUserArgs): Promise<void> {
        const saltedPassword = await hash(args.password, parseInt(process.env.SALT_ROUNDS));

        const newUser: IUser = {
            id: nanoid(),
            email: args.email,
            firstName: args.firstName,
            lastName: args.lastName,
            saltedPassword
        }

        this.userRepo.model.create(newUser)
    }

    async getUsers(args: IGetUsersArgs): Promise<Array<IUser>> {
        const result = this.userRepo.getUsers(args)

        return result;
    }
}