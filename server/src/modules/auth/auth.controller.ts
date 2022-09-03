import { inject } from "inversify";
import { BaseHttpController, controller, httpGet, httpPost, requestBody } from "inversify-express-utils";
import { InjectionTokens } from "../../config";
import { IAuthService, ILoginArgs, IRegisterArgs } from "./auth.types";

@controller('/auth')
export class AuthController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.authService) private authService: IAuthService
    ) {
        super();
    }

    @httpPost('/login')
    private async login(
        @requestBody() body: ILoginArgs
    ) {
        try {
            const token = await this.authService.login(body);

            return this.ok(token)
        }
        catch(e) {
            return this.internalServerError();
        }
    }

    @httpPost('/register')
    private async register(
        @requestBody() body: IRegisterArgs
    ) {
        try {
            await this.authService.register(body);

            return this.ok()
        }
        catch(e) {
            return this.internalServerError();
        }
    }

    @httpGet('/me', InjectionTokens.tokenValidationMiddleware)
    private async me() {
        try {
            const token = await this.authService.me();

            return this.ok(token);
        }
        catch(e) {
            return this.internalServerError();
        }
    }
}