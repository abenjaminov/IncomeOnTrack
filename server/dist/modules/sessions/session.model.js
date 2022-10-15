"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModel = void 0;
const shared_1 = require("@iot/shared");
const mongoose_1 = __importStar(require("mongoose"));
const helpers_1 = require("../../helpers");
const types_1 = require("../../types");
const sessionSchema = (0, helpers_1.IOTSchema)({
    userId: { type: String, required: true },
    client: new mongoose_1.Schema({
        id: { type: String, required: true },
        name: { type: String, required: true },
        paymentOffset: { type: Number, required: true }
    }, { _id: false }),
    notes: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    timeInHours: { type: Number, required: true },
    paymentState: { type: String, required: true, enum: shared_1.PaymentState },
    datePayed: { type: Date },
    receipt: { type: Boolean }
});
exports.SessionModel = mongoose_1.default.model(types_1.CollectionNames.sessions, sessionSchema);
//# sourceMappingURL=session.model.js.map