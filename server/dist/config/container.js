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
(0, inversify_express_utils_1.cleanUpMetadata)();
const container = new inversify_1.Container();
exports.container = container;
container.bind(inversify_express_utils_1.TYPE.Controller).to(app_1.AppController).whenTargetNamed(app_1.AppController.name);
container.bind(inversify_express_utils_1.TYPE.Controller).to(auth_controller_1.AuthController).whenTargetNamed(auth_controller_1.AuthController.name);
container.bind(injection_tokens_1.InjectionTokens.tokenValidationMiddleware).toDynamicValue((context) => {
    return new token_validation_middleware_1.TokenValidationMiddleware();
}).inSingletonScope();
container.bind(injection_tokens_1.InjectionTokens.requestContext).to(services_1.RequestContext).inRequestScope();
container.bind(injection_tokens_1.InjectionTokens.userService).to(user_1.UserService).inSingletonScope();
container.bind(injection_tokens_1.InjectionTokens.authService).to(auth_1.AuthService).inRequestScope();
//# sourceMappingURL=container.js.map