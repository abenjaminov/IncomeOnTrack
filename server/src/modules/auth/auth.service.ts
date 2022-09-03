import { compare, hash } from "bcrypt";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { IAuthService, ILoginArgs, IRegisterArgs } from "./auth.types";
import { v4 as uuidv4 } from 'uuid';
import { IUser, IUserService } from "../user";
import { InjectionTokens } from "../../config";
import { inject } from "inversify";
import { IRequestContext } from "../../types/request-context";

export class AuthService implements IAuthService {

    constructor(
        @inject(InjectionTokens.userService) private userService: IUserService,
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext
    ) {}

    me(): Promise<string | JwtPayload> {
        const decodedToken: any = this.verifyToken(this.requestContext.token);

        if(!decodedToken) throw new Error();

        return decodedToken;
    }

    async register(args: IRegisterArgs): Promise<void> {
        const { password, email } = args;

        const user = await this.userService.getUser({
            email
        })

        if(user)
            throw new Error();

        await this.userService.createUser(args);
    }

    private verifyToken(token: string): string | JwtPayload {
        const verified = verify(token, process.env.TOKEN_SECRET as string, {
            issuer: process.env.TOKEN_ISSUER,
            algorithms: ["HS256"],
          });

        return verified;
    }

    private signToken(user: string, payload?: any, expiresIn = "2w"): string {
        const token = sign(payload, process.env.TOKEN_SECRET as string, {
            algorithm: "HS256",
            subject: user,
            expiresIn,
            issuer: process.env.TOKEN_ISSUER as string,
            audience: process.env.TOKEN_AUDIENCE as string,
            notBefore: 0,
          });

        return token;
    }

    async login(args: ILoginArgs): Promise<string | JwtPayload> {
        const {email, password} = args;

        const user = await this.userService.getUser({
            email
        });

        if(!user)
            throw new Error();

        const passwordCorrect = await compare(password, user.saltedPassword);

        if(!passwordCorrect)
            throw new Error();

        const token = this.signToken(user.email, {
            userId: user.id,
            jti: uuidv4(),
        })

        return token;
    }
}