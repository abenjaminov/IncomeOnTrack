import { z } from 'zod';
import {ZSessionView} from "../../session";


export const ZCalendarDayView = z.object({
    dayOfWeek: z.number(),
    dayOfMonth: z.number(),
    month: z.number(),
    sessions: z.array(ZSessionView),
    date: z.date()
})

export const ZCalendarWeekView = z.object({
  weekIndex: z.number(),
  days: z.array(ZCalendarDayView)
})

export const ZCalendarMonthView = z.object({
  monthIndex: z.number(),
  year: z.number(),
  weeks: z.array(ZCalendarWeekView)
})

export type ICalendarDayView = z.infer<typeof ZCalendarDayView>;
export type ICalendarWeekView = z.infer<typeof ZCalendarWeekView>;
export type ICalendarMonthView = z.infer<typeof ZCalendarMonthView>;
