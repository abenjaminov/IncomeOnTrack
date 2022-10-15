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
exports.UserController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const config_1 = require("../../config");
const base_controller_1 = require("../../helpers/base-controller");
let UserController = class UserController extends base_controller_1.BaseController {
    constructor(userService, log) {
        super(log);
        this.userService = userService;
    }
    getUsers(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.tryExecute(() => __awaiter(this, void 0, void 0, function* () {
                const result = yield this.userService.getUsers(body);
                return result;
            }));
            return result;
        });
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPost)(''),
    __param(0, (0, inversify_express_utils_1.requestBody)())
], UserController.prototype, "getUsers", null);
UserController = __decorate([
    (0, inversify_express_utils_1.controller)('/user'),
    __param(0, (0, inversify_1.inject)(config_1.InjectionTokens.userService)),
    __param(1, (0, inversify_1.inject)(config_1.InjectionTokens.log))
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map