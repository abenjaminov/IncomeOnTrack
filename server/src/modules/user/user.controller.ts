import { BaseHttpController, controller, httpGet, httpPost, requestBody } from "inversify-express-utils";
import { IGetUsersArgs } from "@iot/shared";
import { inject } from "inversify";
import { InjectionTokens } from "../../config";
import { IUserService } from "./user.types";
import { ILog } from "../../types";
import { BaseController } from "../../helpers/base-controller";

@controller('/user')
export class UserController extends BaseController {
    constructor(
        @inject(InjectionTokens.userService) private userService: IUserService,
        @inject(InjectionTokens.log) log: ILog
    ) {
        super(log);
    }

    @httpPost('')
    private async getUsers(
        @requestBody() body: IGetUsersArgs
    ) {
        const result = this.tryExecute(async () => {
            const result = await this.userService.getUsers(body);
            return result;
        })

        return result;
    }
}