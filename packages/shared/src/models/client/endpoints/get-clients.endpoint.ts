import { z } from 'zod';
import {IGetObjectsResult, ZGetObjectsBase} from "../../object";
import {IClient} from "../entities";

const ZGetClientsArgs = ZGetObjectsBase.extend({
    isActive: z.boolean().optional(),
    userId: z.string()
});

export const ZGetClientsRequest = z.object({
    body: ZGetClientsArgs
});

export type IGetClientsResult = Omit<IGetObjectsResult, 'objects'> & {
    clients: Array<IClient>
}

export type IGetClientsArgs = z.infer<typeof ZGetClientsArgs>
