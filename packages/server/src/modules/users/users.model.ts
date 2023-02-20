import mongoose, { Schema } from 'mongoose';
import {CollectionNames} from "../../common";
import {IUser} from "./users.interface";

const UserSchema = new Schema({
    id: { type: String, required: true},
    userName: { type: String, required: true },
    creationDate: { type: Date, required: true },
    modifiedDate: { type: Date, required: true },
    email: { type: String, required: true},
    saltedPassword: { type: String, required: true},
    isVerified: { type: Boolean, required: true },
    isActive: { type: Boolean, required: true }
})

export const UserModel = mongoose.model<IUser>(CollectionNames.users, UserSchema);