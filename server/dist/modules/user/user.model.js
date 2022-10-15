"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../../types");
const helpers_1 = require("../../helpers");
const userSchema = (0, helpers_1.IOTSchema)({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    saltedPassword: { type: String, required: true }
});
exports.UserModel = mongoose_1.default.model(types_1.CollectionNames.users, userSchema);
//# sourceMappingURL=user.model.js.map