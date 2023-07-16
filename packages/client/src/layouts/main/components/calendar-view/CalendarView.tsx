import {calendarContainer, calendarView} from "./calendar-view.css";
import {useCalendar} from "./useCalendar";
import {CalendarWeek} from "./components/calendar-week/CalendarWeek";
import React from "react";
import {CalendarAside} from "./components/calendar-aside/CalendarAside";
import {ThisYearItem} from "./components/calendar-aside/calendar-aside.helpers";

export const CalendarView: React.FC = () => {
  const [monthIndex, setMonthIndex] = React.useState(0);
  const [year, setYear] = React.useState(ThisYearItem.id);

  const { calendarMonth, thisMonthDebt, thisMonthForecast, thisMonthIncome } = useCalendar(year, monthIndex);

  const keyPrefix = React.useId();

  return <div className={calendarView}>
    <div className={calendarContainer}>
      {calendarMonth?.weeks.map((week, index) => <CalendarWeek weekView={week} key={week.weekIndex + keyPrefix}/>)}
    </div>
    <CalendarAside onMonthChange={_monthIndex => setMonthIndex(_monthIndex)}
                   defaultMonthIndex={0}
                   onYearChange={_year => setYear(_year)}
                   thisMonthDebt={thisMonthDebt}
                   thisMonthForecast={thisMonthForecast}
                   thisMonthIncome={thisMonthIncome}/>
  </div>
}
