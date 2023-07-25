import {z} from 'zod';

export const ZGetCalendarParams = z.object({
    year: z.string().transform(x => parseInt(x)),
    monthIndex: z.string().transform(x => parseInt(x)),
    clientId: z.string().optional(),
})

export type IGetCalendarParams = z.infer<typeof ZGetCalendarParams>;

export const ZGetCalendarRequest = z.object({
    params: ZGetCalendarParams,
});
