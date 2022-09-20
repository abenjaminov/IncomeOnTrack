import { IGetSessionArgs } from "@iot/shared";
import { inject } from "inversify";
import { BaseHttpController, controller, httpGet, requestBody } from "inversify-express-utils";
import { ILog } from "../../types";
import { InjectionTokens } from "../../config";
import { ISessionService } from "./session.types";

@controller('/session', InjectionTokens.tokenValidationMiddleware)
export class SessionController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.log) private log: ILog,
        @inject(InjectionTokens.sessionService) private sessionService: ISessionService
    ) {
        super();
    }

    @httpGet('')
    private async getSessions(
        @requestBody() body: IGetSessionArgs
    ) {
        try {
            const sessions = await this.sessionService.getSessions(body);
            return this.ok(sessions);
        }
        catch(e) {
            this.log.error("Error getting sessions", body);
            return this.internalServerError();
        }
    }
}