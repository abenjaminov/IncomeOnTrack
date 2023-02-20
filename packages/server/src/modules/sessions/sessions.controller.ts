import {BaseHttpController, controller, httpPost, requestBody} from "inversify-express-utils";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";
import {IGetSessionArgs} from "@income-on-track/shared";
import {ISessionService} from "./sessions.interface";

@controller('/sessions')
export class SessionsController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.sessionService) private sessionsService: ISessionService
    ) {
        super();
    }

    @httpPost('/get')
    private async getSessions(
        @requestBody() args: IGetSessionArgs
    ){
        const result = await this.sessionsService.getSessions(args);

        return this.json(result);
    }
}