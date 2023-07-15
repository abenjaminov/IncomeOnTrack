import { z } from 'zod';
import {ZObjectBase} from "../../object";

export const ZUserBase = ZObjectBase.extend({
    username: z.string(),
    email: z.string(),
})

export type IUserBase = z.infer<typeof ZUserBase>;
