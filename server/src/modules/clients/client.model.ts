import mongoose from "mongoose";
import { CollectionNames } from "../../types";
import { IOTSchema } from "../../helpers";
import { IClient } from "@iot/shared";

const clientSchema = IOTSchema({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    phoneNumber: {type: String },
    paymentPerHour: {type: Number, required: true},
    isActive: {type: Boolean, required: true},
    paymentMonthOffset: {type: Number, required: true},
    email: {type: String }
})

export const ClientModel = mongoose.model<IClient>(CollectionNames.clients, clientSchema);