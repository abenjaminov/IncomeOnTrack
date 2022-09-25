import { BaseHttpController } from "inversify-express-utils";
import { ILog } from "../types";

export class BaseController extends BaseHttpController {

    constructor(
        protected log: ILog
    ) {
        super()
    }

    async tryExecute(callbck: () => Promise<any>, failedMessage?: string) {
        try {
            const result = await callbck();
            return this.ok(result);
        }
        catch(e) {
            if(failedMessage) {
                this.log.error(failedMessage);
            }
            return this.internalServerError();
        }
    }
}