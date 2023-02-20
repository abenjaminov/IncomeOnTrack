import mongoose, {Schema} from "mongoose";
import {CollectionNames} from "../../common";
import {ISessionBase} from "@income-on-track/shared";

export const SessionSchema = new Schema({
    id: { type: String, required: true},
    creationDate: { type: Date, required: true },
    modifiedDate: { type: Date, required: true },
    clientId: { type: String, required: true },
    payment: { type: Number, required: true },
    date: { type: Date, required: true },
    isPayed: { type: Boolean, required: true },
    datePayed: { type: Date },
    issuedReceipt: { type: Boolean, required: true },
    notes: { type: String }
})

export const SessionModel = mongoose.model<ISessionBase>(CollectionNames.sessions, SessionSchema);