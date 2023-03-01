import { z } from 'zod';
import {ZObjectBase} from "../../object";

export const ZClientBase = ZObjectBase.extend({
    userId: z.string(),
    name: z.string(),
    payment: z.number(),
    isActive: z.boolean(),
    isSalary: z.boolean()
})

export const ZClientView = ZClientBase.pick({
    isActive: true,
    name: true,
    isSalary: true,
    payment: true,
    creationDate: true,
    id: true
}).extend({
    debt: z.number()
})

export type IClientBase = z.infer<typeof ZClientBase>;
export type IClientView = z.infer<typeof ZClientView>;
