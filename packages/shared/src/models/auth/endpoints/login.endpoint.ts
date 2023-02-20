import { z } from 'zod';

export const ZLoginArgs = z.object({
    email: z.string(),
    password: z.string()
})

export const ZLoginRequest = z.object({
    body: ZLoginArgs
});

export const ZLoginResponse = z.object({
    success: z.boolean(),
    authToken: z.string().optional()
})

export type ILoginArgs = z.infer<typeof ZLoginArgs>
export type ILoginResponse = z.infer<typeof ZLoginResponse>