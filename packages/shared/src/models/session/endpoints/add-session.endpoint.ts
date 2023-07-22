import { z } from 'zod';
import {ZSession} from "../entities";

export const ZCreateSessionArgs = ZSession.omit({
    userId: true,
    id: true
}).extend({
    userId: z.string().optional(),
    id: z.string().optional()
})

export const ZCreateSessionRequest = z.object({
    body: ZCreateSessionArgs
})

export type ICreateSessionArgs = z.infer<typeof ZCreateSessionArgs>
