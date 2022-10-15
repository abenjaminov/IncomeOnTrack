"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOTSchema = exports.CommonSchemaOptions = void 0;
const nanoid_1 = require("nanoid");
const mongoose_1 = require("mongoose");
exports.CommonSchemaOptions = {
    timestamps: { createdAt: 'creationDate', updatedAt: 'modifiedDate' },
    id: false,
};
const IOTSchema = (definitions, options) => {
    const BaseSchema = new mongoose_1.Schema({
        id: { type: mongoose_1.Schema.Types.String, required: true, unique: true, index: true, default: () => (0, nanoid_1.nanoid)() },
        _id: { type: mongoose_1.Types.ObjectId, required: true, default: () => new mongoose_1.Types.ObjectId() },
    }, Object.assign(Object.assign({}, exports.CommonSchemaOptions), options));
    BaseSchema.add(definitions);
    return BaseSchema;
};
exports.IOTSchema = IOTSchema;
//# sourceMappingURL=db.js.map