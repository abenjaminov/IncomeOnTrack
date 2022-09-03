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

export { ILoginArgs, IRegisterArgs };
