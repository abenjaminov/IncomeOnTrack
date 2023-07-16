import {ICalendarService} from "./calendar.interface";
import {inject, injectable} from "inversify";
import {ICalendarDayView, ICalendarMonthView, ICalendarWeekView} from "@income-on-track/shared";
import {InjectionTokens} from "../../config";
import {ISessionService} from "../sessions/sessions.interface";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  getDate,
  isSameDay,
  getDay, getMonth
} from "date-fns";
import {IRequestContext} from "../../common";

@injectable()
export class CalendarService implements ICalendarService {
  constructor(
    @inject(InjectionTokens.sessionService) private sessionsService: ISessionService,
    @inject(InjectionTokens.requestContext) private requestContext: IRequestContext,
  ) {
  }

  async getCalendar(monthIndex: number, year: number): Promise<ICalendarMonthView> {
    const date = new Date(Date.UTC(year, monthIndex));
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);

    const calendarStart = startOfWeek(monthStart, {weekStartsOn: 0 })
    const calendarEnd = endOfWeek(monthEnd, {weekStartsOn: 0});

    const sessions = await this.sessionsService.getSessions({
      ignorePaging: true,
      dateRange: {
        fromDate: calendarStart,
        toDate: calendarEnd
      }
    });

    const result: ICalendarMonthView = {
      monthIndex,
      year,
      weeks: []
    }

    const calendar = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

    let weekView: ICalendarWeekView = {
      weekIndex: 0,
      days: []
    };

    calendar.forEach((date, index) => {
      const weekDay: ICalendarDayView = {
        dayOfWeek: getDay(date),
        dayOfMonth: getDate(date),
        month: monthIndex,
        sessions: sessions.sessions.filter(session => isSameDay(session.date, date)),
        date: date
      }

      weekView.days.push(weekDay);

      if (weekDay.dayOfWeek === 6 || index === calendar.length - 1) {
        result.weeks.push(weekView);
        weekView = {
          weekIndex: weekView.weekIndex + 1,
          days: []
        }
      }
    })

    return result;
  }
}
