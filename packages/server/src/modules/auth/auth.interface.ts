import {ILoginArgs, ILoginResponse} from "@income-on-track/shared";

export interface IAuthService {
    login(args: ILoginArgs): Promise<ILoginResponse>;
}