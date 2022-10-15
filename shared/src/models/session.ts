export enum PaymentState {
    owed = 'owed',
    payed = 'payed',
}

export interface IUpdateSessionArgs {
    id: string,
    values: Partial<ISessionBase>
}

export interface ISessionBase {
    client: {
        id: string;
        name: string;
        paymentOffset: number;
    },
    notes: string;
    startDate: Date;
    timeInHours: Date;
    paymentState: PaymentState;
    datePayed?: Date;
    receipt?: boolean;
}

export interface ISession extends ISessionBase{
    id: string;
    userId: string;
}

export interface IGetSessionArgs {
    clientId?: string;
    month?: number;
    year?: number;
}