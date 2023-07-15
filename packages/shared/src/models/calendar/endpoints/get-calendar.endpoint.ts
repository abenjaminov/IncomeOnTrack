import {z} from 'zod';

export const ZGetCalendarParams = z.object({
    year: z.string().transform(x => parseInt(x)),
    monthIndex: z.string().transform(x => parseInt(x)),
})

export type IGetCalendarParams = z.infer<typeof ZGetCalendarParams>;

export const ZGetCalendarRequest = z.object({
    params: ZGetCalendarParams,
});
