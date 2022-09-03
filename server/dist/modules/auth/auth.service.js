"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const uuid_1 = require("uuid");
const config_1 = require("../../config");
const inversify_1 = require("inversify");
let AuthService = class AuthService {
    constructor(userService, requestContext) {
        this.userService = userService;
        this.requestContext = requestContext;
    }
    me() {
        const decodedToken = this.verifyToken(this.requestContext.token);
        if (!decodedToken)
            throw new Error();
        return this.requestContext.token;
    }
    register(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, email } = args;
            const user = yield this.userService.getUser({
                email
            });
            if (user)
                throw new Error();
            yield this.userService.createUser(args);
        });
    }
    verifyToken(token) {
        const verified = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET, {
            issuer: process.env.TOKEN_ISSUER,
            algorithms: ["HS256"],
        });
        return verified;
    }
    signToken(user, payload, expiresIn = "2w") {
        const token = (0, jsonwebtoken_1.sign)(payload, process.env.TOKEN_SECRET, {
            algorithm: "HS256",
            subject: user,
            expiresIn,
            issuer: process.env.TOKEN_ISSUER,
            audience: process.env.TOKEN_AUDIENCE,
            notBefore: 0,
        });
        return token;
    }
    login(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = args;
            const user = yield this.userService.getUser({
                email
            });
            if (!user)
                throw new Error();
            const passwordCorrect = yield (0, bcrypt_1.compare)(password, user.saltedPassword);
            if (!passwordCorrect)
                throw new Error();
            const token = this.signToken(user.email, {
                userId: user.id,
                jti: (0, uuid_1.v4)(),
            });
            return token;
        });
    }
};
AuthService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(config_1.InjectionTokens.userService)),
    __param(1, (0, inversify_1.inject)(config_1.InjectionTokens.requestContext))
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map