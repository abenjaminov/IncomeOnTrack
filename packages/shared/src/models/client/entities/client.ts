import { z } from 'zod';
import {ZObjectBase} from "../../object";

export const ZClientBase = ZObjectBase.extend({
    userId: z.string(),
    name: z.string(),
    payment: z.number(),
    isActive: z.boolean()
})

export type IClientBase = z.infer<typeof ZClientBase>;