import {calendarContainer, calendarAsideContainer, calendarView} from "./calendar-view.css";
import {useCalendar} from "./useCalendar";
import {CalendarWeek} from "./components/calendar-week/CalendarWeek";
import React from "react";

export const CalendarView: React.FC = () => {

  const { calendarMonth } = useCalendar(2023, 6);

  const keyPrefix = React.useId();

  return <div className={calendarView}>
    <div className={calendarContainer}>
      {calendarMonth?.weeks.map((week, index) => <CalendarWeek weekView={week} key={week.weekIndex + keyPrefix}/>)}
    </div>
    <div className={calendarAsideContainer}></div>
  </div>
}
