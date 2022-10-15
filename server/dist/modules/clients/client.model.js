"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../../types");
const helpers_1 = require("../../helpers");
const clientSchema = (0, helpers_1.IOTSchema)({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String },
    paymentPerHour: { type: Number, required: true },
    isActive: { type: Boolean, required: true },
    paymentMonthOffset: { type: Number, required: true },
    email: { type: String }
});
exports.ClientModel = mongoose_1.default.model(types_1.CollectionNames.clients, clientSchema);
//# sourceMappingURL=client.model.js.map