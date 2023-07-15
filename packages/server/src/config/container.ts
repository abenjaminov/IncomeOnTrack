import { Container } from 'inversify';
import {IUserRepository, IUsersService, UsersController, UsersService} from "../modules/users";
import {InjectionTokens} from "./injection-tokens";
import {
    cleanUpMetadata,
    interfaces as inversifyExpressInterfaces,
    TYPE as InversifyExpressInjectionTokens,
} from 'inversify-express-utils';
import {AuthController, AuthService, IAuthService} from "../modules/auth";
import {DBService, IDBService, IRequestContext, RequestContextService} from "../common";
import {UserRepository} from "../modules/users/user.repository";
import {
    ClientsController,
    ClientsRepository,
    ClientsService,
    IClientsRepository,
    IClientsService
} from "../modules/clients";
import {SessionsController} from "../modules/sessions/sessions.controller";
import {ISessionService, ISessionsRepository} from "../modules/sessions/sessions.interface";
import {SessionService} from "../modules/sessions/session.service";
import {SessionsRepository} from "../modules/sessions/sessions.repository";

cleanUpMetadata();

const container = new Container();

// Common
container.bind<IRequestContext>(InjectionTokens.requestContext).to(RequestContextService).inRequestScope();
container.bind<IDBService>(InjectionTokens.dbService).to(DBService).inSingletonScope();

// Auth
container
    .bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller)
    .to(AuthController)
    .whenTargetNamed(AuthController.name);
container.bind<IAuthService>(InjectionTokens.authService).to(AuthService);


// Users
container
    .bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller)
    .to(UsersController)
    .whenTargetNamed(UsersController.name);
container.bind<IUsersService>(InjectionTokens.usersService).to(UsersService).inRequestScope();
container.bind<IUserRepository>(InjectionTokens.userRepository).to(UserRepository).inRequestScope();

// Clients
container
    .bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller)
    .to(ClientsController)
    .whenTargetNamed(ClientsController.name);
container.bind<IClientsService>(InjectionTokens.clientsService).to(ClientsService).inRequestScope();
container.bind<IClientsRepository>(InjectionTokens.clientsRepository).to(ClientsRepository).inRequestScope();

// Sessions
container
  .bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller)
  .to(SessionsController)
  .whenTargetNamed(SessionsController.name);
container.bind<ISessionService>(InjectionTokens.sessionService).to(SessionService).inRequestScope();
container.bind<ISessionsRepository>(InjectionTokens.sessionRepository).to(SessionsRepository).inRequestScope();

export default container;
