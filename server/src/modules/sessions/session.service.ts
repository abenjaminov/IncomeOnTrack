import { IGetSessionArgs, ISession, ISessionBase, IUpdateSessionArgs } from "@iot/shared";
import { inject, injectable } from "inversify";
import { nanoid } from "nanoid";
import { IRequestContext } from "../../types";
import { InjectionTokens } from "../../config";
import { ISessionRepository, ISessionService } from "./session.types";

@injectable()
export class SessionService implements ISessionService {
    constructor(
        @inject(InjectionTokens.requestContext) private requestContext: IRequestContext,
        @inject(InjectionTokens.sessionRepo) private sessionRepo: ISessionRepository
    ) {
    }

    async getSessions(args: IGetSessionArgs): Promise<Array<ISession>> {
        const result = await this.sessionRepo.getSessions(args);

        return result;
    }

    async addSession(session: ISessionBase) : Promise<void> {
        const newSession: ISession = {
            id: nanoid(),
            userId: this.requestContext.user.userId,
            ...session
        }

        await this.sessionRepo.addSession(newSession);
    }

    async updateSession(args: IUpdateSessionArgs): Promise<ISession> {
        const result = this.sessionRepo.updateSession(args);

        return result;
    }
}