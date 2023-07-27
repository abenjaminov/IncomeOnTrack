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
import {IconButton} from "@mui/material";
import Paper from "@mui/material/Paper";

export const CalendarView: React.FC = () => {
  const [monthIndex, setMonthIndex] = React.useState(getMonth(new Date()));
  const [year, setYear] = React.useState(ThisYearItem.id);
  const [isEditingSession, setIsEditingSession] = React.useState(false);
  const [sessionToEdit, setSessionToEdit] = React.useState<ISessionView | undefined>(undefined);
  const [dayOfSessionToEdit, setDayOfSessionToEdit] = React.useState<Date | undefined>(undefined);
  const [asideTitle, setAsideTitle] = React.useState('Info');
  const { subscribe: subscribeSessionClicked } = useEvent(EventType.onSessionClicked)
  const { subscribe: subscribeSessionSaved } = useEvent(EventType.onSessionSaved);
  const { subscribe: onAddSessionClicked } = useEvent(EventType.onAddSessionClicked);

  React.useEffect(() => {
    const unsubscribeSessionClicked = subscribeSessionClicked(({session}) => {
      setIsEditingSession(true)
      setSessionToEdit(session)
      setAsideTitle('Edit Session')
      setDayOfSessionToEdit(session.date)
    })

    const unsubscribeSessionSaved = subscribeSessionSaved(() => {
      setIsEditingSession(false)
      setDayOfSessionToEdit(undefined)
      setSessionToEdit(undefined)
      setAsideTitle('Info')
    })

    const unsubscribeAddSessionClicked = onAddSessionClicked(({ dayView }) => {
      setIsEditingSession(true)
      setAsideTitle('Add Session')
      setDayOfSessionToEdit(dayView.date)
      setSessionToEdit(undefined)
    })

    return () => {
      unsubscribeSessionClicked();
      unsubscribeSessionSaved();
      unsubscribeAddSessionClicked();
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
      {calendarMonth?.weeks.map((week, index) => <CalendarWeek selectedSessionId={sessionToEdit?.id} weekView={week} key={week.weekIndex + keyPrefix}/>)}
    </div>
    <Paper className={calendarAsideContainer}>
      <div className={calendarInfoTitle}>
        <IconButton  className={backButton} onClick={onCloseClicked} style={{
          position: 'absolute'
        }}>
          <ArrowBackIcon />
        </IconButton>
        <span className={calendarInfoTitleText}>{asideTitle}</span>
      </div>
      {!isEditingSession &&
        <CalendarInfo onMonthChange={_monthIndex => {setMonthIndex(_monthIndex); console.log(_monthIndex)}}
                    defaultMonthIndex={monthIndex}
                    onYearChange={_year => setYear(_year)}
                    thisMonthDebt={thisMonthDebt}
                    thisMonthForecast={thisMonthForecast}
                    thisMonthIncome={thisMonthIncome}/>
      }
      {isEditingSession && dayOfSessionToEdit && <SessionAsideEditor session={sessionToEdit} sessionDate={dayOfSessionToEdit} /> }
    </Paper>
  </div>
}
