"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const user_1 = require("../modules/user");
const app_1 = require("../modules/app");
const injection_tokens_1 = require("./injection-tokens");
const auth_1 = require("../modules/auth");
const token_validation_middleware_1 = require("../middleware/token-validation-middleware");
const services_1 = require("../services");
const auth_controller_1 = require("../modules/auth/auth.controller");
const repositories_1 = require("../repositories");
const log_service_1 = require("../services/log.service");
const mongo_connection_1 = require("../repositories/mongo.connection");
const user_repository_1 = require("../modules/user/user.repository");
const user_controller_1 = require("../modules/user/user.controller");
const client_service_1 = require("../modules/clients/client.service");
const client_controller_1 = require("../modules/clients/client.controller");
(0, inversify_express_utils_1.cleanUpMetadata)();
const container = new inversify_1.Container();
exports.container = container;
for (let controller of [
    app_1.AppController,
    auth_controller_1.AuthController,
    user_controller_1.UserController,
    client_controller_1.ClientController
]) {
    container.bind(inversify_express_utils_1.TYPE.Controller).to(controller).whenTargetNamed(controller.name);
}
container.bind(injection_tokens_1.InjectionTokens.tokenValidationMiddleware).toDynamicValue((context) => {
    return new token_validation_middleware_1.TokenValidationMiddleware();
}).inSingletonScope();
container.bind(injection_tokens_1.InjectionTokens.connection).to(mongo_connection_1.MongoConnection).inSingletonScope();
container.bind(injection_tokens_1.InjectionTokens.log).to(log_service_1.Log).inRequestScope();
container.bind(injection_tokens_1.InjectionTokens.clientRepository).to(repositories_1.ClientRepository).inRequestScope();
container.bind(injection_tokens_1.InjectionTokens.clientService).to(client_service_1.ClientService).inRequestScope();
container.bind(injection_tokens_1.InjectionTokens.userRepo).to(user_repository_1.UserRepository).inRequestScope();
container.bind(injection_tokens_1.InjectionTokens.userService).to(user_1.UserService).inSingletonScope();
container.bind(injection_tokens_1.InjectionTokens.requestContext).to(services_1.RequestContext).inRequestScope();
container.bind(injection_tokens_1.InjectionTokens.authService).to(auth_1.AuthService).inRequestScope();
//# sourceMappingURL=container.js.map