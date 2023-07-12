import {ICalendarService} from "./calendar.interface";
import {injectable} from "inversify";
import {ICalendarMonthView} from "@income-on-track/shared";

@injectable()
export class CalendarService implements ICalendarService {
  constructor() {
  }

  getCalendar(monthIndex: number, year: number): Promise<ICalendarMonthView> {
    throw new Error("Not implemented")
  }
}
