import { inject, injectable } from "inversify";
import { IMongoConnection } from "../../types";
import { InjectionTokens } from "../../config";
import { MongoRepository } from "../../repositories/mongo.repository";
import { IUser, UserModel } from "./user.model";
import { Model } from "mongoose";
import { IGetUsersArgs } from "@iot/shared";
import { IUserRepository } from "./user.types";

@injectable()
export class UserRepository extends MongoRepository<IUser> implements IUserRepository{
    protected getModel(): Model<IUser> {
        return UserModel;
    }

    async getUsers(args: IGetUsersArgs): Promise<Array<IUser>> {
        const filter: any = {};

        if(args.ids) {
            filter["id"] = {$in: args.ids};
        }

        if(args.email) filter["email"] = args.email;

        const result = await this.model.find(filter);

        return result;
    }
}