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

export { ICreateClient, IGetClientsArgs, IGetUsersArgs, ILoginArgs, IRegisterArgs };
