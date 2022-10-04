import { ISession, PaymentState } from "@iot/shared";
import mongoose, { Schema } from "mongoose";
import { IOTSchema } from "../../helpers";
import { CollectionNames } from "../../types";

const sessionSchema = IOTSchema({
    userId: {type: String, required: true},
    client: new Schema({
        id: {type: String, required: true},
        name: {type: String, required: true},
        paymentOffset: {type: Number, required: true}
    }, {_id: false}),
    notes: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    timeInHours: {type: Number, required: true},
    paymentState: {type: String, required: true, enum: PaymentState},
    datePayed: { type: Date },
    receipt: { type: Boolean }
})

export const SessionModel = mongoose.model<ISession>(CollectionNames.sessions, sessionSchema);