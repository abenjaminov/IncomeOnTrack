import { z } from 'zod';
import {ZObjectBase} from "../../object";

export const ZClient = ZObjectBase.extend({
    userId: z.string(),
    name: z.string(),
    defaultPayment: z.number(),
    isActive: z.boolean()
})

export const ZClientView = ZClient.extend({
    debt: z.number()
})

export type IClient = z.infer<typeof ZClient>;
export type IClientView = z.infer<typeof ZClientView>;
