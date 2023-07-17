import {calendarAsideContainer, calendarContainer, calendarInfoTitle, calendarView} from "./calendar-view.css";
import {useCalendar} from "./useCalendar";
import {CalendarWeek} from "./components/calendar-week/CalendarWeek";
import React from "react";
import {CalendarInfo} from "./components/calendar-info/CalendarInfo";
import {ThisYearItem} from "./components/calendar-info/calendar-info.helpers";
import {useEvent} from "@shared/hooks";
import {EventType} from "@shared/types/events";
import {ISessionView} from "@income-on-track/shared";
import {format} from "date-fns";
import {SessionAsideEditor} from "./components/edit-session/SessionAsideEditor";

export const CalendarView: React.FC = () => {
  const [monthIndex, setMonthIndex] = React.useState(0);
  const [year, setYear] = React.useState(ThisYearItem.id);
  const [isEditingSession, setIsEditingSession] = React.useState(false);
  const [sessionToEdit, setSessionToEdit] = React.useState<ISessionView | undefined>(undefined);
  const [asideTitle, setAsideTitle] = React.useState('Info');
  const { subscribe } = useEvent(EventType.onSessionClicked)

  React.useEffect(() => {
    const unsubscribe = subscribe(({session}) => {
      setIsEditingSession(true)
      setSessionToEdit(session)
      setAsideTitle('Edit Session')
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const { calendarMonth, thisMonthDebt, thisMonthForecast, thisMonthIncome } = useCalendar(year, monthIndex);

  const keyPrefix = React.useId();

  return <div className={calendarView}>
    <div className={calendarContainer}>
      {calendarMonth?.weeks.map((week, index) => <CalendarWeek weekView={week} key={week.weekIndex + keyPrefix}/>)}
    </div>
    <div className={calendarAsideContainer}>
      <div className={calendarInfoTitle}>{asideTitle}</div>
      {!isEditingSession &&
        <CalendarInfo onMonthChange={_monthIndex => setMonthIndex(_monthIndex)}
                    defaultMonthIndex={0}
                    onYearChange={_year => setYear(_year)}
                    thisMonthDebt={thisMonthDebt}
                    thisMonthForecast={thisMonthForecast}
                    thisMonthIncome={thisMonthIncome}/>
      }
      {isEditingSession && <SessionAsideEditor session={sessionToEdit}/> }
    </div>
  </div>
}
