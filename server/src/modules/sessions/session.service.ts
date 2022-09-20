import { IGetSessionArgs, ISession } from "@iot/shared";
import { inject, injectable } from "inversify";
import { InjectionTokens } from "../../config";
import { ISessionRepository, ISessionService } from "./session.types";

@injectable()
export class SessionService implements ISessionService {
    constructor(
        @inject(InjectionTokens.sessionRepo) private sessionRepo: ISessionRepository
    ) {
    }

    async getSessions(args: IGetSessionArgs): Promise<Array<ISession>> {
        const result = await this.sessionRepo.getSessions(args);

        return result;
    }

}