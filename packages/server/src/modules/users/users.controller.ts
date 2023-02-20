import {BaseHttpController, controller, httpPost, requestBody} from "inversify-express-utils";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";
import {IUsersService} from "./users.interface";
import {IGetUsersArgs} from "@income-on-track/shared";

@controller('/users')
export class UsersController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.usersService) private usersService: IUsersService
    ) {
        super()
    }


    @httpPost('/get')
    private async getUsers(
        @requestBody() args: IGetUsersArgs
    ) {
        const users = await this.usersService.getUsers(args);

        return this.json(users)
    }
}