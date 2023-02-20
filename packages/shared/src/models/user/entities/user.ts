import { z } from 'zod';

const ZUser = z.object({
    id: z.string(),
    userName: z.string(),
    creationDate: z.string(),
    modifiedDate: z.string()
})

export type IUser = z.infer<typeof ZUser>;