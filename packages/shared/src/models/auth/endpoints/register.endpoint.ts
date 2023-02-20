import { z } from 'zod';
import {ZUserBase} from "../../user";

export const ZRegisterArgs = ZUserBase.pick({
    email: true,
    userName: true
}).extend({
    password: z.string()
})

export const ZRegisterRequest = z.object({
    body: ZRegisterArgs
});

export type IRegisterArgs = z.infer<typeof ZRegisterArgs>;