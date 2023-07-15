import {BaseHttpController, controller, httpPost, requestBody} from "inversify-express-utils";
import {IAddClientArgs, IGetClientsArgs} from "@income-on-track/shared";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";
import {IClientsService} from "./clients.interface";
import {authenticateUserTokenMiddleware} from "../../common/middleware";

@controller('/clients')
export class ClientsController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.clientsService) private clientService: IClientsService
    ) {
        super();
    }

    @httpPost('/get', authenticateUserTokenMiddleware)
    private async getClients(
        @requestBody() args: IGetClientsArgs
    ) {
        const result = await this.clientService.getClients(args);

        return this.json(result);
    }

    @httpPost('/', authenticateUserTokenMiddleware)
    private async addClient(
        @requestBody() args: IAddClientArgs
    ){
        await this.clientService.addClient(args);

        return this.ok();
    }
}
