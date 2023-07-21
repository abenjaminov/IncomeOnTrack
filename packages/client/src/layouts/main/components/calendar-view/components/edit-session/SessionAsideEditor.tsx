import {ISessionView} from "@income-on-track/shared";
import React from "react";
import {dynamicSection, section, sectionTitle, sectionValue, sessionAsideEditor} from "./session-aside-editor.css";
import {ClientsDropdown} from "@shared/components";
import {Button, IconButton, TextField, ToggleButton, Tooltip} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import EditIcon from '@mui/icons-material/Edit';
import {useSessionEdit} from "./useSessionEdit";

type SessionAsideEditorProps = {
  session?: ISessionView
}

export const SessionAsideEditor: React.FC<SessionAsideEditorProps> = ({ session }) => {
  const [isEditClient, setIsEditClient] = React.useState(!session)
  const {
    paymentRegister,
    setDate,
    date,
    notesRegister,
    setDatePayed,
    datePayed,
    setClientId,
    issuedReceipt,
    toggleIssuedReceipt,
    onSubmit
  } = useSessionEdit(session);

  return <div className={sessionAsideEditor}>
    <div className={section}>
      <div className={sectionTitle}>Client</div>
      {isEditClient && <ClientsDropdown className={sectionValue} defaultClientId={session?.clientId} onClientChange={setClientId}/>}
      {!isEditClient && <div className={sectionValue}>{session?.clientName}<IconButton onClick={() => setIsEditClient(true)}><EditIcon /></IconButton></div>}
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
        <ToggleButton selected={issuedReceipt} onChange={toggleIssuedReceipt} value={!issuedReceipt}>
          <ReceiptIcon />
        </ToggleButton>
      </Tooltip>
      <Tooltip title={'Was this session payed for?'}>
        <ToggleButton selected={!!datePayed} value='checked' onChange={setDatePayed}>
          <PriceCheckIcon />
        </ToggleButton>
      </Tooltip>
    </div>
    <div className={dynamicSection}>
      <TextField multiline maxRows={4} rows={4} placeholder='Notes' style={{
        width: '100%'
      }} {...notesRegister}/>
    </div>
    <div className={dynamicSection}>
      <Button variant='contained' color='primary' fullWidth onClick={onSubmit}>Save</Button>
    </div>
  </div>
}
