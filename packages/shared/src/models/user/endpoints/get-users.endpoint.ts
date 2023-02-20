import { z } from 'zod';

export const ZGetUsersArgs = z.object({
    ids: z.string().array().optional(),
    email: z.string().optional()
})

export const ZGetUsersRequest = z.object({
    body: ZGetUsersArgs
});

export type IGetUsersArgs = z.infer<typeof ZGetUsersArgs>;