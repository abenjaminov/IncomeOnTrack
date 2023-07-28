import {ISessionService, ISessionsRepository} from "./sessions.interface";
import {ICreateSessionArgs, IGetSessionArgs, IGetSessionsResult, IGraph, ISession} from "@income-on-track/shared";
import {inject, injectable} from "inversify";
import {InjectionTokens} from "../../config";
import {IRequestContext} from "../../common";
import {GraphType} from "@income-on-track/shared";
import { addMonths, getMonth, getYear } from 'date-fns'

@injectable()
export class SessionService implements ISessionService {
    constructor(
        @inject(InjectionTokens.sessionRepository) private sessionRepository: ISessionsRepository,
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext
    ) {
    }
    async getSessions(args: IGetSessionArgs): Promise<IGetSessionsResult> {
        const result = await this.sessionRepository.getSessions({
            ...args,
            userId: args.userId || this.requestContext.userId
        });

        return result;
    }

    async createOrUpdate(args: ICreateSessionArgs): Promise<ISession | undefined> {
        const result = await this.sessionRepository.createOrUpdate({
            ...args,
            userId: args.userId || this.requestContext.userId
        });

        return result;
    }

    async getLastTwelveMonthsPaymentsSummary(userId?: string): Promise<IGraph> {
        const result: IGraph = {
            name: 'Payed Sessions Per Month',
            data: {
                type: GraphType.paymentPerMonth,
                items: []
            }
        }
        const repoResult = await this.sessionRepository.getLastTwelveMonthsPaymentsSummary(userId || this.requestContext.userId);

        // make sure there are 12 items in array, missing ones should be 0
        const now = new Date();

        for(let i = 0; i < 12; i++) {
            const date = addMonths(now, -i);
            const month = getMonth(date) + 1;
            const year = getYear(date);

            const monthIndex = repoResult.findIndex(x => x.month_payed === month && x.year_payed === year);

            if(monthIndex === -1) {
                result.data.items.push({
                    month,
                    year,
                    payment: 0,
                    label: `${month}/${year}`
                })
            }
            else {
                result.data.items.push({
                    month,
                    year,
                    payment: repoResult[monthIndex].total_payment,
                    label: `${month}/${year}`
                })
            }
        }


        return result;
    }
}
