import mongoose, { Schema } from 'mongoose';
import {IClientBase} from "@income-on-track/shared";
import {CollectionNames} from "../../common";

const ClientSchema = new Schema({
    id: { type: String, required: true},
    creationDate: { type: Date, required: true },
    modifiedDate: { type: Date, required: true },
    name: { type: String, required: true },
    userId: { type: String, required: true },
    payment: { type: Number, required: true },
    isActive: { type: Boolean, required: true },
    isSalary: { type: Boolean, required: true }
})

export const ClientModel = mongoose.model<IClientBase>(CollectionNames.clients, ClientSchema);