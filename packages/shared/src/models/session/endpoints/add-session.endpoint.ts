import { z } from 'zod';
import {ZSession} from "../entities";

const ZCreateSessionArgs = ZSession.omit({
    userId: true,
}).extend({
    userId: z.string().optional()
})

export const ZCreateSessionRequest = z.object({
    body: ZCreateSessionArgs
})

export type ICreateSessionArgs = z.infer<typeof ZCreateSessionArgs>
