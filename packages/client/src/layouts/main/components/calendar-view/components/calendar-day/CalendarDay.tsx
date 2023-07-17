import {ICalendarDayView} from "@income-on-track/shared";
import React from "react";
import {
  calendarDayEvents,
  calendarDayOfMonth,
  calendarDayView,
  calendarWeekDayName,
  dayHeader, isTodayDate
} from "./calendar-day.css";
import {dayOfWeekToName} from "./calendar-day.helpers";
import { isToday } from 'date-fns';
import clsx from "clsx";
import {CalendarSession} from "../calendar-session/CalendarSession";

type CalendarDayProps = {
  dayView: ICalendarDayView
}
export const CalendarDay: React.FC<CalendarDayProps> = ({ dayView }) => {
  const _isTodayDate = isToday(dayView.date);

  const firstThreeSessions = dayView.sessions.slice(0, 3);

  const sessionKeyPrefix = React.useId();

  return <div className={clsx(calendarDayView, {
    [isTodayDate]: _isTodayDate
  })}>
    <div className={dayHeader}>
      <div className={calendarDayOfMonth}>
        {dayView.dayOfMonth}
      </div>
      <div className={calendarWeekDayName}>
        {dayOfWeekToName[dayView.dayOfWeek]}
      </div>
    </div>
    {firstThreeSessions.length > 0 && <div className={calendarDayEvents}>
      {firstThreeSessions.map((session, index) => <CalendarSession session={session} key={session.id + sessionKeyPrefix} />)}
    </div>}
    {firstThreeSessions.length === 0 && <div className={calendarDayEvents} style={{
      alignItems: 'center',
    }}>
      No sessions
    </div>}
  </div>
}
