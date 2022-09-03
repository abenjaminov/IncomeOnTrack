import { injectable } from "inversify";
import { injectHttpContext, interfaces as utilInterfaces } from "inversify-express-utils";
import { nanoid } from "nanoid";
import { IRequestContext } from "../types/request-context";

@injectable()
export class RequestContext implements IRequestContext {
    _flowId: string;
    _token: string;
  constructor(@injectHttpContext private readonly httpContext: utilInterfaces.HttpContext) {
    this._flowId = nanoid();
  }

  get flowId() {
    return this._flowId;
  }

  get token() {
    return (this.httpContext?.request as any)["token"]
  }

  get user() {
    const user = {
      userId: (this.httpContext?.request as any)['userId'],
      lastName: (this.httpContext?.request as any)['firstName'],
      firstName: (this.httpContext?.request as any)['lastName'],
    };

    return user;
  }

}