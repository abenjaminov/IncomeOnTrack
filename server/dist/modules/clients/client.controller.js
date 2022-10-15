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
exports.ClientController = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const config_1 = require("../../config");
let ClientController = class ClientController extends inversify_express_utils_1.BaseHttpController {
    constructor(log, clientService) {
        super();
        this.log = log;
        this.clientService = clientService;
    }
    createOrUpdateClient(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.clientService.create(body);
                return this.ok();
            }
            catch (e) {
                this.log.error("Error creating or updating client", {
                    error: e,
                    body
                });
            }
        });
    }
    getClients(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.clientService.getClients(body);
                return this.ok(result);
            }
            catch (e) {
                this.log.error("Error getting clients", {
                    error: e,
                    body
                });
                return this.internalServerError();
            }
        });
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPut)(''),
    __param(0, (0, inversify_express_utils_1.requestBody)())
], ClientController.prototype, "createOrUpdateClient", null);
__decorate([
    (0, inversify_express_utils_1.httpPost)('/get-clients'),
    __param(0, (0, inversify_express_utils_1.requestBody)())
], ClientController.prototype, "getClients", null);
ClientController = __decorate([
    (0, inversify_express_utils_1.controller)('/client', config_1.InjectionTokens.tokenValidationMiddleware),
    __param(0, (0, inversify_1.inject)(config_1.InjectionTokens.log)),
    __param(1, (0, inversify_1.inject)(config_1.InjectionTokens.clientService))
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map