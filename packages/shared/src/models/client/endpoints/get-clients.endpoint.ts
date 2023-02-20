import { z } from 'zod';
import {IGetObjectsResult, ZGetObjectsBase} from "../../object";
import {IClientBase} from "../entities";

const ZGetClientsArgs = ZGetObjectsBase.extend({
    isActive: z.boolean().optional()
});

export const ZGetClientsRequest = z.object({
    body: ZGetClientsArgs
});

export type IGetClientBaseResult = IGetObjectsResult & {
    objects: Array<IClientBase>
}

export type IGetClientsArgs = z.infer<typeof ZGetClientsArgs>