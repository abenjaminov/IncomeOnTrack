"use strict";
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
exports.BaseController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
class BaseController extends inversify_express_utils_1.BaseHttpController {
    constructor(log) {
        super();
        this.log = log;
    }
    tryExecute(callbck, failedMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield callbck();
                return this.ok(result);
            }
            catch (e) {
                if (failedMessage) {
                    this.log.error(failedMessage);
                }
                return this.internalServerError();
            }
        });
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base-controller.js.map