import {BaseHttpController, controller, httpGet, httpPost, requestBody} from "inversify-express-utils";
import {ILoginArgs, IRegisterArgs} from "@income-on-track/shared";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";
import {IAuthService} from "./auth.interface";

@controller('/api/auth')
export class AuthController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.authService) private authService: IAuthService
    ) {
        super()
    }

    @httpGet('/health')
    private async health() {
        return this.ok("YO");
    }

    @httpPost('/login')
    private async login(
        @requestBody() args: ILoginArgs
    ) {
      const loginResult = await this.authService.login(args);

      return this.json(loginResult);
    }

    @httpPost('/register')
    private async register(
        @requestBody() args: IRegisterArgs
    ) {
        const result = await this.authService.register(args);

        if(!result) {
            return this.badRequest();
        }

        return this.ok();
    }
}
