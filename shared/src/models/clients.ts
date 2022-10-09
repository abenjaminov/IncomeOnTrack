export interface IGetClientsArgs {
    filterText?: string;
    includeDebt?: boolean;
}

export interface ICreateClientArgs {
    id?: string;
    name: string;
    paymentPerHour: number;
    paymentMonthOffset: number;
    phoneNumber?: string;
    email?: string;
}

export interface IClient {
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