export const InjectionTokens = {
    requestContext: Symbol.for('requestContext'),
    dbService: Symbol.for('dbService'),
    authService: Symbol.for('authService'),
    usersService: Symbol.for('usersService'),
    userRepository: Symbol.for('userRepo'),
    clientsService: Symbol.for('clientsService'),
    clientsRepository: Symbol.for('clientsRepo'),
    sessionService: Symbol.for('sessionService'),
    sessionRepository: Symbol.for('sessionRepo'),
    calendarService: Symbol.for('calendarService'),
}
