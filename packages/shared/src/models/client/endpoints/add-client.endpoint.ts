import { z } from 'zod';
import {ZClient} from "../entities";

export const ZAddClientArgs = ZClient.pick({
    name: true,
    isActive: true,
    defaultPayment: true
}).extend({
    userId: z.string().optional()
})

export const ZAddClientRequest = z.object({
    body: ZAddClientArgs
})

export type IAddClientArgs = z.infer<typeof ZAddClientArgs>
