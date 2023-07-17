import {ISessionView} from "@income-on-track/shared";
import React from "react";
import {dynamicSection, section, sectionTitle, sectionValue, sessionAsideEditor} from "./session-aside-editor.css";
import {ClientsDropdown} from "@shared/components";
import {TextField, ToggleButton, Tooltip} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import {useSessionEdit} from "./useSessionEdit";

type SessionAsideEditorProps = {
  session?: ISessionView
}

export const SessionAsideEditor: React.FC<SessionAsideEditorProps> = ({ session }) => {
  const {
    paymentRegister,
    clientIdRegister,
    setDate,
    date,
    notesRegister,
    setDatePayed,
    datePayed
  } = useSessionEdit(session);

  return <div className={sessionAsideEditor}>
    <div className={section}>
      <div className={sectionTitle}>Client</div>
      <ClientsDropdown className={sectionValue}/>
    </div>
    <div className={section}>
      <div className={sectionTitle}>Payment</div>
      <TextField type='number' fullWidth style={{
        width: '70%'
      }} {...paymentRegister}/>
    </div>
    <div className={section}>
      <div className={sectionTitle}>Date & Time</div>
      <DatePicker label='Session time' className={sectionValue} onChange={date => date && setDate} value={date}/>
    </div>
    <div className={section} style={{
      gap: '1rem',
      justifyContent: 'flex-end'
    }}>
      <Tooltip title={'Was a receipt issued for this session?'}>
        <ToggleButton selected={true} value='checked'>
          <ReceiptIcon />
        </ToggleButton>
      </Tooltip>
      <Tooltip title={'Was this session payed for?'}>
        <ToggleButton selected={datePayed !== undefined} value='checked' onChange={setDatePayed}>
          <PriceCheckIcon />
        </ToggleButton>
      </Tooltip>
    </div>
    <div className={dynamicSection}>
      <TextField multiline maxRows={4} rows={4} placeholder='Notes' style={{
        width: '100%'
      }} {...notesRegister}/>
    </div>
  </div>
}
