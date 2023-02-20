import { Container } from 'inversify';
import {IUsersService, UsersController, UsersService} from "../modules/users";
import {InjectionTokens} from "./injection-tokens";
import {
    cleanUpMetadata,
    interfaces as inversifyExpressInterfaces,
    TYPE as InversifyExpressInjectionTokens,
} from 'inversify-express-utils';
import {AuthController, AuthService, IAuthService} from "../modules/auth";

cleanUpMetadata();

const container = new Container();

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

container.bind<IUsersService>(InjectionTokens.usersService).to(UsersService);
export default container;