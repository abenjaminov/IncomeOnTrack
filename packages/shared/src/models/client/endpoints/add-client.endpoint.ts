import { z } from 'zod';
import {ZClientBase} from "../entities";

export const ZAddClientArgs = ZClientBase.pick({
    name: true,
    isActive: true,
    payment: true,
    isSalary: true
})

export const ZAddClientRequest = z.object({
    body: ZAddClientArgs
})

export type IAddClientArgs = z.infer<typeof ZAddClientArgs>