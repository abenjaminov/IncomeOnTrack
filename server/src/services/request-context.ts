import { injectHttpContext, interfaces as utilInterfaces } from "inversify-express-utils";
import { nanoid } from "nanoid";
import { IRequestContext } from "../types/request-context";

export class RequestContext implements IRequestContext {
    _flowId: string;
  constructor(@injectHttpContext private readonly httpContext: utilInterfaces.HttpContext) {
    this._flowId = nanoid();
  }

  get flowId() {
    return this._flowId;
  }

  get user() {
    const user = {
      token: getTokenFromRequest(this.httpContext.request),
      userId: (this.httpContext?.request as any)['userId'],
      username: (this.httpContext?.request as any)['username'],
      isVerified: (this.httpContext?.request as any)['isVerified'],
      isAdmin: (this.httpContext?.request as any)['isAdmin'],
      isPremium: (this.httpContext?.request as any)['isPremium'],
    };

    return user;
  }

}