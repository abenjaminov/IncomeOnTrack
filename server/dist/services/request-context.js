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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContext = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const nanoid_1 = require("nanoid");
let RequestContext = class RequestContext {
    constructor(httpContext) {
        this.httpContext = httpContext;
        this._flowId = (0, nanoid_1.nanoid)();
    }
    get flowId() {
        return this._flowId;
    }
    get token() {
        var _a;
        return ((_a = this.httpContext) === null || _a === void 0 ? void 0 : _a.request)["token"];
    }
    get user() {
        var _a, _b, _c;
        const user = {
            userId: ((_a = this.httpContext) === null || _a === void 0 ? void 0 : _a.request)['userId'],
            lastName: ((_b = this.httpContext) === null || _b === void 0 ? void 0 : _b.request)['firstName'],
            firstName: ((_c = this.httpContext) === null || _c === void 0 ? void 0 : _c.request)['lastName'],
        };
        return user;
    }
};
RequestContext = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, inversify_express_utils_1.injectHttpContext)
], RequestContext);
exports.RequestContext = RequestContext;
//# sourceMappingURL=request-context.js.map