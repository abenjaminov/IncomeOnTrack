import { ICreateUserArgs, IGetUserArgs, IUserService } from "./user.types";
import { IUser } from "./user.model";
import { hash } from "bcrypt";
import { nanoid } from "nanoid";

export class UserService implements IUserService {
    async createUser(args: ICreateUserArgs): Promise<void> {
        const saltedPassword = await hash(args.password, parseInt(process.env.SALT_ROUNDS));

        const newUser: IUser = {
            id: nanoid(),
            email: args.email,
            firstName: args.firstName,
            lastName: args.lastName,
            saltedPassword
        }

        // TODO : Add user to DB
    }

    getUser(args: IGetUserArgs): Promise<IUser> {
        return Promise.resolve({
            id: '21m290md09m124m=-da;sldm',
            firstName: 'Shir',
            lastName: 'Ashkenazi',
            email: 'shir.ashkenazi10@gmail.com',
            saltedPassword: '$2b$10$TpSU4nDijUEb6DRcxsEbFeoIAW2/RhusGxLiuqVejURIdzyKquXTi'
        });
    }
}