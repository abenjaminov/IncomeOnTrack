import { Container } from 'inversify';
import {IUsersService, UsersController, UsersService} from "../modules/users";
import {InjectionTokens} from "./injection-tokens";
import {
    cleanUpMetadata,
    interfaces as inversifyExpressInterfaces,
    TYPE as InversifyExpressInjectionTokens,
} from 'inversify-express-utils';

cleanUpMetadata();

const container = new Container();

// Users
container
    .bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller)
    .to(UsersController)
    .whenTargetNamed(UsersController.name);

container.bind<IUsersService>(InjectionTokens.usersService).to(UsersService);
export default container;