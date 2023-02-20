import { z } from 'zod';

export const ZObjectBase = z.object({
    id: z.string(),
    creationDate: z.date(),
    modifiedDate: z.date()
});

export const ZGetObjectsBase = z.object({
    ids: z.string().array().optional(),
    filterText: z.string().optional(),
    page: z.number().optional(),
    pageSize: z.number().optional()
})

export const ZGetObjectsResult = z.object({
    count: z.number(),
    objects: ZObjectBase.array()
})

export type IObjectBase = z.infer<typeof ZObjectBase>
export type IGetObjectsBase = z.infer<typeof ZGetObjectsBase>
export type IGetObjectsResult = z.infer<typeof ZGetObjectsResult>