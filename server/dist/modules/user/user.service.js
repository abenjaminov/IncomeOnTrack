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
exports.UserService = void 0;
const bcrypt_1 = require("bcrypt");
const nanoid_1 = require("nanoid");
const inversify_1 = require("inversify");
const config_1 = require("../../config");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    createUser(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const saltedPassword = yield (0, bcrypt_1.hash)(args.password, parseInt(process.env.SALT_ROUNDS));
            const newUser = {
                id: (0, nanoid_1.nanoid)(),
                email: args.email,
                firstName: args.firstName,
                lastName: args.lastName,
                saltedPassword
            };
            this.userRepo.model.create(newUser);
        });
    }
    getUsers(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.userRepo.getUsers(args);
            return result;
        });
    }
};
UserService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(config_1.InjectionTokens.userRepo))
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map