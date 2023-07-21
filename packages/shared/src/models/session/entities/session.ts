import { z } from 'zod';
import {ZObjectBase} from "../../object";
import {SessionState} from "../../../enums";

export const ZSession = ZObjectBase.extend({
    clientId: z.string(),
    userId: z.string(),
    payment: z.number(),
    date: z.date(),
    datePayed: z.date().nullable().optional(),
    issuedReceipt: z.boolean(),
    notes: z.string().optional()
})

export const ZSessionView = ZSession.extend({
    clientName: z.string(),
    sessionState: z.nativeEnum(SessionState)
})

export type ISession = z.infer<typeof ZSession>;
export type ISessionView = z.infer<typeof ZSessionView>;
