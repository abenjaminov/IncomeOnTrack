import { ICreateClient, IGetClientsArgs } from "@iot/shared";
import { inject } from "inversify";
import { BaseHttpController, controller, httpGet, httpPost, httpPut, requestBody } from "inversify-express-utils";
import { ILog } from "../../types";
import { InjectionTokens } from "../../config";
import { IClientService } from "./client.types";

@controller('/client', InjectionTokens.tokenValidationMiddleware)
export class ClientController extends BaseHttpController {
    constructor(
        @inject(InjectionTokens.log) private log: ILog,
        @inject(InjectionTokens.clientService) private clientService: IClientService
    ) {
        super();
    }

    @httpPut('')
    private async createOrUpdateClient(
        @requestBody() body: ICreateClient
    ) {
        try {
            await this.clientService.create(body);
            return this.ok()
        }
        catch(e) {
            this.log.error("Error creating or updating client", {
                error: e,
                body
            })
        }
    }

    @httpPost('/get-clients')
    private async getClients(
        @requestBody() body: IGetClientsArgs
    ) {
        try {
            const result = await this.clientService.getClients(body);
            return this.ok(result);
        }
        catch(e) {  
            this.log.error("Error getting clients", {
                error: e,
                body
            })
            return this.internalServerError();
        }
    }
}