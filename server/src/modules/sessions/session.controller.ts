import { IGetSessionArgs, ISessionBase, IUpdateSessionArgs } from "@iot/shared";
import { inject } from "inversify";
import { BaseHttpController, controller, httpGet, httpPost, httpPut, requestBody } from "inversify-express-utils";
import { ILog } from "../../types";
import { InjectionTokens } from "../../config";
import { ISessionService } from "./session.types";
import { BaseController } from "../../helpers/base-controller";

@controller('/session', InjectionTokens.tokenValidationMiddleware)
export class SessionController extends BaseController {
    constructor(
        @inject(InjectionTokens.log) log: ILog,
        @inject(InjectionTokens.sessionService) private sessionService: ISessionService
    ) {
        super(log);
    }

    @httpGet('')
    private async getSessions(
        @requestBody() body: IGetSessionArgs
    ) {
        const result = this.tryExecute(async () => {
            const sessions = await this.sessionService.getSessions(body);
            return this.ok(sessions);
        })
    }

    @httpPut('')
    private async addSession(
        @requestBody() body : ISessionBase
    ) {
        const result = this.tryExecute(async () => {
            await this.sessionService.addSession(body);
        })

        return result;
    }

    @httpPost('')
    private async updateSession(
        @requestBody() body: IUpdateSessionArgs
    ) {

    }
}