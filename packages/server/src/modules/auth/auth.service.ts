import {inject, injectable} from "inversify";
import {IAuthService} from "./auth.interface";
import {ILoginArgs, ILoginResponse, IRegisterArgs, LoginFailReason} from "@income-on-track/shared";
import {InjectionTokens} from "../../config";
import {IUsersService} from "../users";
import {compare, hash} from 'bcrypt';
import {sign} from 'jsonwebtoken';
import {ITokenPayload} from "../../common/middleware";

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

        if(!user) return {
            success: false,
            reason: LoginFailReason.generalFail
        }

        if(!user.isVerified) return {
            success: false,
            reason: LoginFailReason.userNotVerified
        }

        if(!user.isActive) return {
            success: false,
            reason: LoginFailReason.userNotActive
        }

        const passwordValidated = await compare(args.password, user.saltedPassword);

        if(!passwordValidated) return {
            success: false,
            reason: LoginFailReason.generalFail
        }

        const tokenPayload: ITokenPayload = {
            userId: user.id
        }

        const authToken = sign(tokenPayload, process.env.TOKEN_SECRET as string, {
            algorithm: 'HS256',
            subject: user.username,
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
