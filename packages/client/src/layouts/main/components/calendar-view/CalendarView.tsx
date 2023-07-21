import {
  backButton,
  calendarAsideContainer,
  calendarContainer,
  calendarInfoTitle, calendarInfoTitleText,
  calendarView
} from "./calendar-view.css";
import {useCalendar} from "./useCalendar";
import {CalendarWeek} from "./components/calendar-week/CalendarWeek";
import React from "react";
import {CalendarInfo} from "./components/calendar-info/CalendarInfo";
import {ThisYearItem} from "./components/calendar-info/calendar-info.helpers";
import {useEvent} from "@shared/hooks";
import {EventType} from "@shared/types/events";
import {ISessionView} from "@income-on-track/shared";
import { getMonth } from "date-fns";
import {SessionAsideEditor} from "./components/edit-session/SessionAsideEditor";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button, IconButton} from "@mui/material";

export const CalendarView: React.FC = () => {
  const [monthIndex, setMonthIndex] = React.useState(getMonth(new Date()));
  const [year, setYear] = React.useState(ThisYearItem.id);
  const [isEditingSession, setIsEditingSession] = React.useState(false);
  const [sessionToEdit, setSessionToEdit] = React.useState<ISessionView | undefined>(undefined);
  const [asideTitle, setAsideTitle] = React.useState('Info');
  const { subscribe: subscribeSessionClicked } = useEvent(EventType.onSessionClicked)
  const { subscribe: subscribeSessionSaved } = useEvent(EventType.onSessionSaved);

  React.useEffect(() => {
    const unsubscribeSessionClicked = subscribeSessionClicked(({session}) => {
      setIsEditingSession(true)
      setSessionToEdit(session)
      setAsideTitle('Edit Session')
    })

    const unsubscribeSessionSaved = subscribeSessionSaved(() => {
      setIsEditingSession(false)
      setAsideTitle('Info')
    })

    return () => {
      unsubscribeSessionClicked();
      unsubscribeSessionSaved();
    }
  }, [])

  const { calendarMonth, thisMonthDebt, thisMonthForecast, thisMonthIncome } = useCalendar(year, monthIndex);

  const keyPrefix = React.useId();

  const onCloseClicked = () => {
    setIsEditingSession(false)
    setAsideTitle('Info')
  }

  return <div className={calendarView}>
    <div className={calendarContainer}>
      {calendarMonth?.weeks.map((week, index) => <CalendarWeek weekView={week} key={week.weekIndex + keyPrefix}/>)}
    </div>
    <div className={calendarAsideContainer}>
      <div className={calendarInfoTitle}>
        <IconButton  className={backButton} onClick={onCloseClicked} style={{
          position: 'absolute'
        }}>
          <ArrowBackIcon />
        </IconButton>
        <span className={calendarInfoTitleText}>{asideTitle}</span>
      </div>
      {!isEditingSession &&
        <CalendarInfo onMonthChange={_monthIndex => setMonthIndex(_monthIndex)}
                    defaultMonthIndex={monthIndex}
                    onYearChange={_year => setYear(_year)}
                    thisMonthDebt={thisMonthDebt}
                    thisMonthForecast={thisMonthForecast}
                    thisMonthIncome={thisMonthIncome}/>
      }
      {isEditingSession && <SessionAsideEditor session={sessionToEdit}/> }
    </div>
  </div>
}
