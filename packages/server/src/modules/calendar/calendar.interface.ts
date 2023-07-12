import {ICalendarMonthView} from "@income-on-track/shared";

export interface ICalendarService {
    getCalendar(monthIndex: number, year: number): Promise<ICalendarMonthView>;
}
