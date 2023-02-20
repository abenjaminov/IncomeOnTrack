import {BaseHttpController, controller, httpPost, requestBody} from "inversify-express-utils";
import {ILoginArgs} from "@income-on-track/shared";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";
import {IAuthService} from "./auth.interface";

@controller('/auth')
export class AuthController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.authService) private authService: IAuthService
    ) {
        super()
    }

    @httpPost('/login')
    private async login(
        @requestBody() args: ILoginArgs
    ) {
      const loginResult = await this.authService.login(args);

      return this.json(loginResult);
    }
}