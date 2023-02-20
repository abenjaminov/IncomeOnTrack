import { z } from 'zod';

const ZUserBase = z.object({
    id: z.string(),
    userName: z.string(),
    email: z.string(),
    creationDate: z.string(),
    modifiedDate: z.string()
})

export type IUserBase = z.infer<typeof ZUserBase>;