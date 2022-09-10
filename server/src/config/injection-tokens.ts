export const InjectionTokens = {
    tokenValidationMiddleware: Symbol.for("tokenValidationMiddleware"),
    requestContext: Symbol.for("requestContext"),
    userService: Symbol.for("userService"),
    authService: Symbol.for("authService"),
    airtableConnection: Symbol.for("airtableConnection"),
    clientRepository: Symbol.for("clientRepository")
}