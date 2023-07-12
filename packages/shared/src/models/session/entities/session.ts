import { z } from 'zod';
import {ZObjectBase} from "../../object";

export const ZSessionBase = ZObjectBase.extend({
    clientId: z.string(),
    payment: z.number(),
    date: z.date(),
    datePayed: z.date().optional(),
    issuedReceipt: z.boolean(),
    notes: z.string().optional()
})

export const ZSessionView = ZSessionBase.extend({
    clientName: z.string(),
})

export type ISessionBase = z.infer<typeof ZSessionBase>;
export type ISessionView = z.infer<typeof ZSessionView>;
