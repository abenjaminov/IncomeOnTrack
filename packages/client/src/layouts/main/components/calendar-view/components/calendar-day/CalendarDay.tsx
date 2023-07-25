import {ICalendarDayView} from "@income-on-track/shared";
import React from "react";
import {
  addSessionButton,
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
import AddIcon from '@mui/icons-material/Add';
import {useEvent} from "@shared/hooks";
import {EventType} from "@shared/types/events";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

type CalendarDayProps = {
  dayView: ICalendarDayView
  selectedSessionId?: string
}
export const CalendarDay: React.FC<CalendarDayProps> = ({ dayView, selectedSessionId }) => {
  const _isTodayDate = isToday(dayView.date);
  const { emit } = useEvent(EventType.onAddSessionClicked)
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | SVGElement>(null);
  const open = Boolean(menuAnchorEl);

  const handleOpenMenu = (event: React.MouseEvent<SVGSVGElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleAddSessionMenuItemClick = () => {
    handleCloseMenu()
    emit({dayView})
  }

  const firstThreeSessions = dayView.sessions.slice(0, 3);

  const sessionKeyPrefix = React.useId();

  const topRightActions = dayView.sessions.length <= 3 ? <AddIcon className={addSessionButton} onClick={() => emit({dayView})}/> : <React.Fragment>
    <MenuIcon className={addSessionButton} onClick={e => handleOpenMenu(e)}/>
    <Menu
      id="basic-menu"
      anchorEl={menuAnchorEl}
      open={open}
      onClose={handleCloseMenu}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleAddSessionMenuItemClick}>Add Session</MenuItem>
      <MenuItem onClick={handleCloseMenu}>View All Sessions</MenuItem>
    </Menu>
  </React.Fragment>

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
      {topRightActions}
    </div>
    {firstThreeSessions.length > 0 && <div className={calendarDayEvents}>
      {firstThreeSessions.map((session, index) => <CalendarSession selected={session.id === selectedSessionId} session={session} key={session.id + sessionKeyPrefix} />)}
    </div>}
    {firstThreeSessions.length === 0 && <div className={calendarDayEvents} style={{
      alignItems: 'center',
    }}>
      No sessions
    </div>}
  </div>
}
