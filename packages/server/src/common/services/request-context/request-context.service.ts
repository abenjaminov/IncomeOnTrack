import {IRequestContext} from "./request-context.interface";
import {injectable} from "inversify";
import { injectHttpContext, interfaces as utilInterfaces } from 'inversify-express-utils';

@injectable()
export class RequestContextService implements IRequestContext{

    constructor(@injectHttpContext private readonly httpContext: utilInterfaces.HttpContext) {
    }

    get userId() {
        return this.httpContext.request ? (this.httpContext.request as any)['userId'] : ''
    }
}