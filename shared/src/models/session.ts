export enum PaymentState {
    owed = 'owed',
    payed = 'payed',
}

export interface ISession {
    id: string;
    userId: string;
    client: {
        id: string;
        name: string;
        paymentOffset: number;
    },
    notes: string;
    startDate: Date;
    endDate: Date;
    paymentState: PaymentState;
    datePayed?: Date;
    receipt?: boolean;
}

export interface IGetSessionArgs {
    clientId?: string;
    month?: number;
    year?: number;
}