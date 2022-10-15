import { Container } from "inversify";
import { cleanUpMetadata,interfaces as inversifyExpressInterfaces, TYPE as InversifyExpressInjectionTokens } from "inversify-express-utils";
import { IUserRepository, IUserService, UserService } from "../modules/user";
import { AppController } from "../modules/app";
import { InjectionTokens } from "./injection-tokens";
import { AuthService, IAuthService } from "../modules/auth";
import { TokenValidationMiddleware } from "../middleware/token-validation-middleware";
import { IRequestContext } from "../types/request-context";
import { RequestContext } from "../services";
import { AuthController } from "../modules/auth/auth.controller";
import { ILog, IMongoConnection } from "../types";
import { ClientRepository } from "../repositories";
import { Log } from "../services/log.service";
import { MongoConnection } from "../repositories/mongo.connection";
import { UserRepository } from "../modules/user/user.repository";
import { UserController } from "../modules/user/user.controller";
import { ClientService } from "../modules/clients/client.service";
import { IClientService } from "../modules/clients/client.types";
import { IClientRepository } from "../modules/clients/client.types";
import { ClientController } from "../modules/clients/client.controller";
import { SessionController } from "../modules/sessions/session.controller";
import { ISessionRepository } from "../modules/sessions/session.types";
import { SessionRepository } from "../modules/sessions/session.repository";
import { ISessionService } from "../modules/sessions/session.types";
import { SessionService } from "../modules/sessions/session.service";

cleanUpMetadata();

const container = new Container();

for(let controller of [
    AppController,
    AuthController,
    UserController,
    ClientController,
    SessionController
]){
    container.bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller).to(controller).whenTargetNamed(controller.name);
}

container.bind<TokenValidationMiddleware>(InjectionTokens.tokenValidationMiddleware).toDynamicValue((context) => {
    return new TokenValidationMiddleware();
}).inSingletonScope();

container.bind<IMongoConnection>(InjectionTokens.connection).to(MongoConnection).inSingletonScope();
container.bind<ILog>(InjectionTokens.log).to(Log).inRequestScope();

container.bind<IClientRepository>(InjectionTokens.clientRepository).to(ClientRepository).inRequestScope();
container.bind<IClientService>(InjectionTokens.clientService).to(ClientService).inRequestScope();

container.bind<IUserRepository>(InjectionTokens.userRepo).to(UserRepository).inRequestScope();
container.bind<IUserService>(InjectionTokens.userService).to(UserService).inSingletonScope();

container.bind<ISessionRepository>(InjectionTokens.sessionRepo).to(SessionRepository).inSingletonScope();
container.bind<ISessionService>(InjectionTokens.sessionService).to(SessionService).inSingletonScope();

container.bind<IRequestContext>(InjectionTokens.requestContext).to(RequestContext).inRequestScope()

container.bind<IAuthService>(InjectionTokens.authService).to(AuthService).inRequestScope();

export { container };