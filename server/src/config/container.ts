import { Container } from "inversify";
import { cleanUpMetadata,interfaces as inversifyExpressInterfaces, TYPE as InversifyExpressInjectionTokens } from "inversify-express-utils";
import { IUserService, UserService } from "../modules/user";
import { AppController } from "../modules/app";
import { InjectionTokens } from "./injection-tokens";
import { AuthService, IAuthService } from "../modules/auth";
import { TokenValidationMiddleware } from "../middleware/token-validation-middleware";
import { IRequestContext } from "../types/request-context";
import { RequestContext } from "../services";
import { AuthController } from "../modules/auth/auth.controller";

cleanUpMetadata();

const container = new Container();

container.bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller).to(AppController).whenTargetNamed(AppController.name);
container.bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller).to(AuthController).whenTargetNamed(AuthController.name);

container.bind<TokenValidationMiddleware>(InjectionTokens.tokenValidationMiddleware).toDynamicValue((context) => {
    return new TokenValidationMiddleware();
}).inSingletonScope();


container.bind<IRequestContext>(InjectionTokens.requestContext).to(RequestContext).inRequestScope()

container.bind<IUserService>(InjectionTokens.userService).to(UserService).inSingletonScope();
container.bind<IAuthService>(InjectionTokens.authService).to(AuthService).inRequestScope();

export { container };