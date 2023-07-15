import { z } from 'zod';
import {LoginFailReason} from "../../../enums";

export const ZLoginArgs = z.object({
    email: z.string().min(1),
    password: z.string().min(1)
})

export const ZLoginRequest = z.object({
    body: ZLoginArgs
});

export const ZLoginResponse = z.object({
    success: z.boolean(),
    reason: z.nativeEnum(LoginFailReason).optional(),
    authToken: z.string().optional()
})

export type ILoginArgs = z.infer<typeof ZLoginArgs>
export type ILoginResponse = z.infer<typeof ZLoginResponse>
