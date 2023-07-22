import {ISessionService, ISessionsRepository} from "./sessions.interface";
import {ICreateSessionArgs, IGetSessionArgs, IGetSessionsResult, ISession} from "@income-on-track/shared";
import {inject, injectable} from "inversify";
import {InjectionTokens} from "../../config";
import {IRequestContext} from "../../common";

@injectable()
export class SessionService implements ISessionService {
    constructor(
        @inject(InjectionTokens.sessionRepository) private sessionRepository: ISessionsRepository,
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext
    ) {
    }
    async getSessions(args: IGetSessionArgs): Promise<IGetSessionsResult> {
        const result = await this.sessionRepository.getSessions({
            ...args,
            userId: args.userId || this.requestContext.userId
        });

        return result;
    }

    async createOrUpdate(args: ICreateSessionArgs): Promise<ISession | undefined> {
        const result = await this.sessionRepository.createOrUpdate({
            ...args,
            userId: args.userId || this.requestContext.userId
        });

        return result;
    }
}
