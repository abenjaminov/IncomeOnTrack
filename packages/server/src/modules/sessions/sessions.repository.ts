import {RepositoryBase} from "../../common";
import {IGetSessionArgs, ISessionBase} from "@income-on-track/shared";
import {ISessionsRepository} from "./sessions.interface";
import {FilterQuery} from "mongoose";
import {endOfDay, startOfDay} from "date-fns";
import {SessionModel} from "./sessions.model";
import {injectable} from "inversify";

@injectable()
export class SessionsRepository extends RepositoryBase<ISessionBase, IGetSessionArgs> implements ISessionsRepository {

    constructor() {
        super(SessionModel);
    }
    buildFilterInternal(args: IGetSessionArgs): FilterQuery<ISessionBase> {
        const filter: FilterQuery<ISessionBase> = {};

        if(args.isFuture !== undefined) {
            filter.date = args.isFuture ? { $gt: new Date() } : {$lte: new Date() }
        }

        if(args.isPayed !== undefined) {
            filter.isPayed = args.isPayed
        }

        if(args.clientId) {
            filter.clientId = args.clientId;
        }

        if(args.fromDate) {
            const startOfFromDate = startOfDay(args.fromDate);

            filter.date = { $gte: startOfFromDate };
        }

        if(args.toDate) {
            const endOfToDate = endOfDay(args.toDate);

            if(!filter.date) {
                filter.date = {}
            }

            filter.date['$lte'] = endOfToDate;
        }

        return filter;
    }

}