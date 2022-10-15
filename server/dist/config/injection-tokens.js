"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectionTokens = void 0;
exports.InjectionTokens = {
    tokenValidationMiddleware: Symbol.for("tokenValidationMiddleware"),
    requestContext: Symbol.for("requestContext"),
    userService: Symbol.for("userService"),
    userRepo: Symbol.for("userRepo"),
    authService: Symbol.for("authService"),
    clientRepository: Symbol.for("clientRepository"),
    clientService: Symbol.for("clientService"),
    log: Symbol.for('logService'),
    connection: Symbol.for('connection'),
    sessionService: Symbol.for('sessionService'),
    sessionRepo: Symbol.for('sessionRepo')
};
//# sourceMappingURL=injection-tokens.js.map