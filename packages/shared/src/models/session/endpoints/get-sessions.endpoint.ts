import { z } from 'zod';
import {IGetObjectsResult, ZGetObjectsBase} from "../../object";
import {ISessionBase} from "../entities";

const ZGetSessionsArgs = ZGetObjectsBase.extend({
    fromDate: z.string().transform(x => new Date(x)).optional(),
    toDate: z.string().transform(x => new Date(x)).optional(),
    clientId: z.string().optional(),
    isPayed: z.boolean().optional(),
    isFuture: z.boolean().optional()
})

export const ZGetSessionsRequest = z.object({
    body: ZGetSessionsArgs
})

export type IGetSessionArgs = z.infer<typeof ZGetSessionsArgs>

export type IGetSessionsResult = IGetObjectsResult & {
    objects: Array<ISessionBase>
}