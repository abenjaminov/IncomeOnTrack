import {ICalendarWeekView} from "@income-on-track/shared";
import React from "react";
import {calendarWeekView} from "./calendar-week.css";
import {CalendarDay} from "../calendar-day/CalendarDay";

type CalendarWeekProps = {
  weekView: ICalendarWeekView
  selectedSessionId?: string
  selectedMonthIndex: number
}

export const CalendarWeek: React.FC<CalendarWeekProps> = ({ weekView, selectedSessionId, selectedMonthIndex }) => {
  const keyPrefix = React.useId();

  return (<div className={calendarWeekView}>
    {weekView.days.map((day, index) => <CalendarDay selectedSessionId={selectedSessionId} isThisMonth={selectedMonthIndex === day.month} dayView={day} key={keyPrefix + day.dayOfMonth}/>)}
  </div>);
}
