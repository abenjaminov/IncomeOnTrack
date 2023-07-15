import { z } from 'zod';
import {IGetObjectsResult, ZGetObjectsBase} from "../../object";
import {IClientView} from "../entities";

const ZGetClientsArgs = ZGetObjectsBase.extend({
    isActive: z.boolean().optional(),
    userId: z.string().optional()
});

export const ZGetClientsRequest = z.object({
    body: ZGetClientsArgs
});

export type IGetClientsResult = Omit<IGetObjectsResult, 'objects'> & {
    clients: Array<IClientView>
}

export type IGetClientsArgs = z.infer<typeof ZGetClientsArgs>
