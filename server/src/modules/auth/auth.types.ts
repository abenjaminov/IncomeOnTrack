import { JwtPayload } from "jsonwebtoken";

export interface ILoginArgs {
    email: string;
    password: string;
}

export interface IRegisterArgs {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface IAuthService {
    login(args: ILoginArgs): Promise<string | JwtPayload>;
    register(args: IRegisterArgs): Promise<void>;
    me(): Promise<string | JwtPayload>
}