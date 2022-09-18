export interface IGetClientsArgs {
    userId?: string;
    filterText?: string;
    includeDebt?: boolean;
}
export interface ICreateClient {
    id?: string;
    name: string;
    paymentPerHour: number;
    paymentMonthOffset: number;
    phoneNumber?: string;
    email?: string;
}
//# sourceMappingURL=clients.d.ts.map