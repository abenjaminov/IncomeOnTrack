import { z } from 'zod';
import {ZObjectBase} from "../../object";

export const ZSessionBase = ZObjectBase.extend({
    clientId: z.string(),
    payment: z.number(),
    date: z.date(),
    isPayed: z.boolean(),
    datePayed: z.date().optional(),
    issuedReceipt: z.boolean(),
    notes: z.string().optional()
})

export type ISessionBase = z.infer<typeof ZSessionBase>;