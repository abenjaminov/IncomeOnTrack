import { IGetSessionArgs, ISession, IUpdateSessionArgs } from "@iot/shared";
import { injectable } from "inversify";
import { Model } from "mongoose";
import { MongoRepository } from "../../repositories/mongo.repository";
import { SessionModel } from "./session.model";
import { ISessionRepository } from "./session.types";
import { endOfMonth, set, startOfMonth } from 'date-fns'

@injectable()
export class SessionRepository extends MongoRepository<ISession> implements ISessionRepository {
    protected getModel(): Model<ISession> {
        return SessionModel;
    }

    async getSessions(args: IGetSessionArgs): Promise<Array<ISession>> {
        const filter: any = {}

        if(args.clientId) {
            filter["client.id"] = args.clientId;
        }

        if(args.month || args.year) {
            const now = new Date();
            const year = args.year ?? now.getUTCFullYear();
            const month = args.month ?? now.getUTCMonth();

            const filterDate = set(now, {
                year,
                month
            })

            filter["startDate"] = {
                $gte: startOfMonth(filterDate),
                lte: endOfMonth(filterDate)
            } 
        }

        const result = await this.model.find(filter);

        return result;
    }

    async addSession(session: ISession) : Promise<void> {
        await this.model.create(session);
    }

    async updateSession(args: IUpdateSessionArgs): Promise<ISession> {
        const result = await this.model.findOneAndUpdate({
            id: args.id
        }, {
            $set: args.values
        }, {
            new: true
        }).lean();

        return result;
    }
}