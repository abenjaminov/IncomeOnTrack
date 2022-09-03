import { BaseHttpController, controller, httpGet } from "inversify-express-utils";

@controller('/app')
export class AppController extends BaseHttpController {
    constructor() {
        super();
    }

    @httpGet('/health-check')
    private async healthCheck() {
        return this.ok("Healthy");
    }
}