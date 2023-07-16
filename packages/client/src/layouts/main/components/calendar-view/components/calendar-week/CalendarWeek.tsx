import {ICalendarWeekView} from "@income-on-track/shared";
import React from "react";
import {calendarWeekView} from "./calendar-week.css";
import {CalendarDay} from "../calendar-day/CalendarDay";

type CalendarWeekProps = {
  weekView: ICalendarWeekView
}

export const CalendarWeek: React.FC<CalendarWeekProps> = ({ weekView }) => {
  const keyPrefix = React.useId();

  return (<div className={calendarWeekView}>
    {weekView.days.map((day, index) => <CalendarDay dayView={day} key={keyPrefix + day.dayOfMonth}/>)}
  </div>);
}
