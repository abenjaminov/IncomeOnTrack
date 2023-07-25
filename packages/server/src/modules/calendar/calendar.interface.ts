import {ICalendarMonthView} from "@income-on-track/shared";

export interface ICalendarService {
    getCalendar(monthIndex: number, year: number, clientId?: string): Promise<ICalendarMonthView>;
}
