import { BaseHttpController, controller, httpGet, httpPost, requestBody } from "inversify-express-utils";
import { IGetUsersArgs } from "@iot/shared";
import { inject } from "inversify";
import { InjectionTokens } from "../../config";
import { IUserService } from "./user.types";
import { ILog } from "../../types";

@controller('/user')
export class UserController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.userService) private userService: IUserService,
        @inject(InjectionTokens.log) private log: ILog
    ) {
        super();
    }

    @httpPost('')
    private async getUsers(
        @requestBody() body: IGetUsersArgs
    ) {
        try {
            const result = await this.userService.getUsers(body);
            return this.ok(result);
        }
        catch(e) {
            this.log.error("Error Getting users", e);
            return this.internalServerError();   
        }
    }
    
}