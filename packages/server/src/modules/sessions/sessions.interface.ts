import {ICreateSessionArgs, IGetSessionArgs, IGetSessionsResult, IGraph, ISession} from "@income-on-track/shared";

export interface ISessionService {
    getSessions(args: IGetSessionArgs): Promise<IGetSessionsResult>
    createOrUpdate(args: ICreateSessionArgs): Promise<ISession | undefined>
    getLastTwelveMonthsPaymentsSummary(userId?: string): Promise<IGraph>
}

export type ICreateSessionArgsInternal = ICreateSessionArgs & { userId: string }

export type IGetSessionArgsInternal = IGetSessionArgs & { userId: string }

export type IMonthPaymentSum = {
    month_payed: number,
    year_payed: number,
    total_payment: number
}

export interface ISessionsRepository {
    getSessions(args: IGetSessionArgsInternal): Promise<IGetSessionsResult>
    createOrUpdate(args: ICreateSessionArgsInternal): Promise<ISession | undefined>
    getLastTwelveMonthsPaymentsSummary(userId: string): Promise<Array<IMonthPaymentSum>>
}
