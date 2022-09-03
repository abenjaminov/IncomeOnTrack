import { JwtPayload } from "jsonwebtoken";
import { ILoginArgs, IRegisterArgs } from '@iot/shared'

export interface IAuthService {
    login(args: ILoginArgs): Promise<string | JwtPayload>;
    register(args: IRegisterArgs): Promise<void>;
    me(): string
}