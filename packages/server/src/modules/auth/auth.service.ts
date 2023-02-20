import {inject, injectable} from "inversify";
import {IAuthService} from "./auth.interface";
import {ILoginArgs, ILoginResponse, IRegisterArgs} from "@income-on-track/shared";
import {InjectionTokens} from "../../config";
import {IUsersService} from "../users";
import { compare, hash } from 'bcrypt';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

@injectable()
export class AuthService implements IAuthService {
    constructor(
        @inject(InjectionTokens.usersService) private userService: IUsersService
    ) {}

    async register(args: IRegisterArgs) {
        const user = await this.userService.getUser({
            email: args.email
        });

        if(user) {
            return false;
        }

        const saltedPassword = await hash(args.password, process.env.SALT_ROUNDS ?? 10);

        await this.userService.createUser({
            ...args,
            saltedPassword
        })

        return true;
    }

    async login(args: ILoginArgs): Promise<ILoginResponse> {
        const user = await this.userService.getUser({
            email: args.email
        });

        if(!user || !user.isVerified) return {
            success: false
        };

        const passwordValidated = compare(args.password, user.saltedPassword);

        if(!passwordValidated) return {
            success: false,
        }

        const tokenPayload = {
            id: user.id
        }

        const authToken = sign(tokenPayload, process.env.TOKEN_SECRET as string, {
            algorithm:'HS256',
            subject: user.userName,
            expiresIn: '2w',
            issuer: process.env.TOKEN_ISSUER as string,
            audience: process.env.TOKEN_AUDIENCE as string,
            notBefore: 0,
        })

        return {
            success: true,
            authToken
        }
    }
}