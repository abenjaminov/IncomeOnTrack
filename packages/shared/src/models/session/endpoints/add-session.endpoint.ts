import { z } from 'zod';
import {ZSession} from "../entities";

export const ZCreateSessionArgs = ZSession.omit({
    userId: true,
    id: true,
    payment: true
}).extend({
    userId: z.string().optional(),
    id: z.string().optional(),
    payment: z.string().transform(x => parseFloat(x)).or(z.number())
})

export const ZCreateSessionRequest = z.object({
    body: ZCreateSessionArgs
})

export type ICreateSessionArgs = z.infer<typeof ZCreateSessionArgs>
