interface ILoginArgs {
    email: string;
    password: string;
}
interface IRegisterArgs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface IGetUsersArgs {
    ids?: Array<string>;
    email?: string;
}

interface IGetClientsArgs {
    userId?: string;
    filterText?: string;
    includeDebt?: boolean;
}
interface ICreateClient {
    id?: string;
    name: string;
    paymentPerHour: number;
    paymentMonthOffset: number;
    phoneNumber?: string;
    email?: string;
}

declare enum PaymentState {
    owed = "owed",
    payed = "payed"
}
interface ISession {
    id: string;
    userId: string;
    client: {
        id: string;
        name: string;
        paymentOffset: number;
    };
    notes: string;
    startDate: Date;
    endDate: Date;
    paymentState: PaymentState;
    datePayed?: Date;
    receipt?: boolean;
}
interface IGetSessionArgs {
    clientId?: string;
    month?: number;
    year?: number;
}

export { ICreateClient, IGetClientsArgs, IGetSessionArgs, IGetUsersArgs, ILoginArgs, IRegisterArgs, ISession, PaymentState };
