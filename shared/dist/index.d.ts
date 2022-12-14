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
    filterText?: string;
    includeDebt?: boolean;
}
interface ICreateClientArgs {
    id?: string;
    name: string;
    paymentPerHour: number;
    paymentMonthOffset: number;
    phoneNumber?: string;
    email?: string;
}
interface IClient {
    id: string;
    userId: string;
    name: string;
    phoneNumber: string;
    paymentPerHour: number;
    isActive: boolean;
    paymentMonthOffset: number;
    email: string;
    debt?: number;
}

declare enum PaymentState {
    owed = "owed",
    payed = "payed"
}
interface IUpdateSessionArgs {
    id: string;
    values: Partial<ISessionBase>;
}
interface ISessionBase {
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
interface ISession extends ISessionBase {
    id: string;
    userId: string;
}
interface IGetSessionArgs {
    clientId?: string;
    month?: number;
    year?: number;
}

export { IClient, ICreateClientArgs, IGetClientsArgs, IGetSessionArgs, IGetUsersArgs, ILoginArgs, IRegisterArgs, ISession, ISessionBase, IUpdateSessionArgs, PaymentState };
