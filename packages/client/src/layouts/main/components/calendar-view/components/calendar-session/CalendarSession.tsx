import {ISessionView} from "@income-on-track/shared";
import React from "react";
import {calendarSession, receiptMark, sessionClientName, sessionTime, sessionSelected} from "./calendar-session.css";
import { format } from 'date-fns';
import ReceiptIcon from '@mui/icons-material/Receipt';
import {useEvent} from "@shared/hooks";
import {EventType} from "@shared/types/events";
import clsx from "clsx";

type CalendarSessionProps = {
  session: ISessionView
  selected?: boolean
}

export const CalendarSession: React.FC<CalendarSessionProps> = ({ session, selected}) => {
  const { emit: onSessionClicked } = useEvent(EventType.onSessionClicked)

  const _onSessionClicked = () => {
    onSessionClicked({
      session
    })
  }

  return <div className={clsx(calendarSession[session.sessionState], {
    [sessionSelected]: selected
  })} onClick={_onSessionClicked}>
    <div className={sessionTime}>{format(session.date, 'HH:mm')}</div>
    <div className={sessionClientName}>{session.clientName}</div>
    {session.issuedReceipt && <ReceiptIcon className={receiptMark}/> }
  </div>
}
