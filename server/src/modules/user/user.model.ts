import mongoose from "mongoose";
import { CollectionNames } from "../../types";
import { IOTSchema } from "../../helpers";

export interface IUser {
    id: string;
    firstName: string,
    lastName: string,
    email: string;
    saltedPassword: string;
}

const userSchema = IOTSchema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    saltedPassword: {type: String, required: true}
})

export const UserModel = mongoose.model<IUser>(CollectionNames.users, userSchema);