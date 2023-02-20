import mongoose, { Schema } from 'mongoose';
import {IUser} from "@income-on-track/shared";
import {CollectionNames} from "../../common";

const UserSchema = new Schema({
    id: { type: String, required: true},
    userName: { type: String, required: true },
    creationDate: { type: Date, required: true }
})

export const UserModel = mongoose.model<IUser>(CollectionNames.users, UserSchema);