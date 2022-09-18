import mongoose from "mongoose";
import { CollectionNames } from "../../types";
import { IOTSchema } from "../../helpers";

export interface IClient {
    id: string;
    userId: string;
    name: string;
    phoneNumber: string;
    paymentPerHour: number;
    isActive: boolean;
    paymentMonthOffset: number;
    email: string;
}

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