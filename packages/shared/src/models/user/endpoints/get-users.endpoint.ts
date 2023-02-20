import { z } from 'zod';
import {IGetObjectsResult, ZGetObjectsBase} from "../../object";
import {IUserBase} from "../entities";

export const ZGetUsersArgs = ZGetObjectsBase.extend({
    email: z.string().optional()
})

export const ZGetUsersRequest = z.object({
    body: ZGetUsersArgs
});

export type IGetUserBaseResult = IGetObjectsResult & {
    objects: Array<IUserBase>
}

export type IGetUsersArgs = z.infer<typeof ZGetUsersArgs>;