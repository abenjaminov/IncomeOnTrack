import {BaseHttpController, controller, httpPost, requestBody} from "inversify-express-utils";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";
import {ICreateSessionArgs, IGetSessionArgs} from "@income-on-track/shared";
import {ISessionService} from "./sessions.interface";
import {authenticateUserTokenMiddleware} from "../../common/middleware";

@controller('/api/sessions')
export class SessionsController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.sessionService) private sessionsService: ISessionService
    ) {
        super();
    }

    @httpPost('/get', authenticateUserTokenMiddleware)
    private async getSessions(
        @requestBody() args: IGetSessionArgs
    ){
        const result = await this.sessionsService.getSessions(args);

        return this.json(result);
    }

    @httpPost('/', authenticateUserTokenMiddleware)
    private async createOrUpdate(
        @requestBody() args: ICreateSessionArgs
    ){
        const result = await this.sessionsService.createOrUpdate(args);

        return this.json(result);
    }
}
