import { z } from 'zod';
import {ZObjectBase} from "../../object";

export const ZClientBase = ZObjectBase.extend({
    userId: z.string(),
    name: z.string(),
    defaultPayment: z.number(),
    isActive: z.boolean()
})

export const ZClientView = ZClientBase.pick({
    isActive: true,
    name: true,
    defaultPayment: true,
    creationDate: true,
    id: true
}).extend({
    debt: z.number()
})

export type IClientBase = z.infer<typeof ZClientBase>;
export type IClientView = z.infer<typeof ZClientView>;
