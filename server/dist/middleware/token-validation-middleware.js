"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidationMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const inversify_express_utils_1 = require("inversify-express-utils");
const jsonwebtoken_1 = require("jsonwebtoken");
class TokenValidationMiddleware extends inversify_express_utils_1.BaseMiddleware {
    handler(req, res, next) {
        const bearerHeader = req.header('Authorization');
        const token = bearerHeader === null || bearerHeader === void 0 ? void 0 : bearerHeader.split(' ')[1];
        if (!bearerHeader || !token) {
            res.sendStatus(http_status_codes_1.StatusCodes.UNAUTHORIZED);
        }
        const decodedToken = (0, jsonwebtoken_1.decode)(token, { json: true });
        if (!decodedToken) {
            res.sendStatus(http_status_codes_1.StatusCodes.UNAUTHORIZED);
        }
        else {
            const reqAsAny = req;
            reqAsAny['token'] = token;
            Object.entries(decodedToken).map(([key, value]) => {
                reqAsAny[key] = value;
            });
            next();
        }
    }
}
exports.TokenValidationMiddleware = TokenValidationMiddleware;
//# sourceMappingURL=token-validation-middleware.js.map