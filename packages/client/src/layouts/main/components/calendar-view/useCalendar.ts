import {useApiQuery} from "@shared/hooks/useApi";
import {ICalendarMonthView} from "@income-on-track/shared";

export const useCalendar = (year: number, monthIndex: number) => {
  const { data } = useApiQuery<unknown, ICalendarMonthView>(`calendar/${year}/${monthIndex}`);

  if(data) {
    data.weeks.forEach(week => {
      week.days.forEach(day => {
        day.date = new Date(day.date)

        day.sessions.forEach(session => {
          session.date = new Date(session.date)
        });
      })
    })
  }

  return {
    calendarMonth: data
  }
}
