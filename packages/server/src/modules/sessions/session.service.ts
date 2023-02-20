import {ISessionService, ISessionsRepository} from "./sessions.interface";
import {IGetSessionArgs, IGetSessionsResult, ISessionBase} from "@income-on-track/shared";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";

export class SessionService implements ISessionService {
    constructor(
        @inject(InjectionTokens.sessionRepository) private sessionRepository: ISessionsRepository
    ) {
    }
    async getSessions(args: IGetSessionArgs): Promise<IGetSessionsResult> {
        const result = await this.sessionRepository.getObjects(args);

        return {
            count: result.count,
            objects: result.objects as Array<ISessionBase>
        }
    }

}