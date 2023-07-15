import { z } from 'zod';
import {IGetObjectsResult, ZGetObjectsBase} from "../../object";
import {ISession, ISessionView} from "../entities";

const ZGetSessionsArgs = ZGetObjectsBase.extend({
    dateRange: z.object({
        fromDate: z.string().transform(x => new Date(x)),
        toDate: z.string().transform(x => new Date(x)),
    }).optional(),
    clientId: z.string().optional(),
    isPayed: z.boolean().optional(),
    isFuture: z.boolean().optional(),
    userId: z.string().optional()
})

export const ZGetSessionsRequest = z.object({
    body: ZGetSessionsArgs
})

export type IGetSessionArgs = z.infer<typeof ZGetSessionsArgs>

export type IGetSessionsResult = Omit<IGetObjectsResult, 'objects'> & {
    sessions: Array<ISessionView>
}
