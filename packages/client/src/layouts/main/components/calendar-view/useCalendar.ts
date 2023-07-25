import {useApiQuery} from "@shared/hooks/useApi";
import {ICalendarMonthView, SessionState} from "@income-on-track/shared";
import {CacheKeys} from "@shared/types";

export const useCalendar = (year: number, monthIndex: number) => {
  const { data } = useApiQuery<unknown, ICalendarMonthView>(`calendar/${year}/${monthIndex}`, {
    cacheKey: CacheKeys.calendar
  });

  if(data) {
    data.weeks.forEach(week => {
      week.days.forEach(day => {
        day.date = new Date(day.date)

        day.sessions.forEach(session => {
          session.date = new Date(session.date)

          if(session.datePayed) session.datePayed = new Date(session.datePayed)
        });
      })
    })
  }

  const thisMonthDebt = data?.weeks.reduce((acc, week) => {
    return acc + week.days.reduce((acc, day) => {
      return acc + day.sessions.filter(x => x.sessionState === SessionState.debt).reduce((acc, session) => {
        return acc + session.payment
      }, 0)
    }, 0)
  }, 0)

  const thisMonthForecast = data?.weeks.reduce((acc, week) => {
    return acc + week.days.reduce((acc, day) => {
      return acc + day.sessions.reduce((acc, session) => {
        return acc + session.payment
      }, 0)
    }, 0)
  }, 0)

  const thisMonthIncome = data?.weeks.reduce((acc, week) => {
    return acc + week.days.reduce((acc, day) => {
      return acc + day.sessions.filter(x => x.sessionState === SessionState.payed).reduce((acc, session) => {
        return acc + session.payment
      }, 0)
    }, 0)
  }, 0)


  return {
    calendarMonth: data,
    thisMonthDebt,
    thisMonthForecast,
    thisMonthIncome
  }
}
