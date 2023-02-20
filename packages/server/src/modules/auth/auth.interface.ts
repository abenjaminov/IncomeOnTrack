import {ILoginArgs, ILoginResponse, IRegisterArgs} from "@income-on-track/shared";

export interface IAuthService {
    register(args: IRegisterArgs): Promise<boolean>;
    login(args: ILoginArgs): Promise<ILoginResponse>;
}