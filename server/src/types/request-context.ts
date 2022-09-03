export interface IRequestContext {
    user: {
        userId: string;
        firstName: string;
        lastName: string;
    };
    token: string;
    flowId: string;
}