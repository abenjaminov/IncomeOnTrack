import {ISessionView} from "@income-on-track/shared";
import React from "react";
import {calendarSession, receiptMark, sessionClientName, sessionTime} from "./calendar-session.css";
import { format } from 'date-fns';
import ReceiptIcon from '@mui/icons-material/Receipt';

type CalendarSessionProps = {
  session: ISessionView
}

export const CalendarSession: React.FC<CalendarSessionProps> = ({ session }) => {
  return <div className={calendarSession[session.sessionState]}>
    <div className={sessionTime}>{format(session.date, 'HH:mm')}</div>
    <div className={sessionClientName}>{session.clientName}</div>
    {session.issuedReceipt && <ReceiptIcon className={receiptMark}/> }
  </div>
}
