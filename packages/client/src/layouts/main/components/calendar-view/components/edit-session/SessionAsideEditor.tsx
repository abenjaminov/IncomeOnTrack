import {ISessionView} from "@income-on-track/shared";
import React from "react";
import {dynamicSection, section, sectionTitle, sectionValue, sessionAsideEditor} from "./session-aside-editor.css";
import {ClientsDropdown} from "@shared/components";
import {Button, IconButton, TextField, ToggleButton, Tooltip} from "@mui/material";
import {DateTimePicker} from "@mui/x-date-pickers";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import {useSessionEditor} from "./useSessionEditor";
import { Controller } from 'react-hook-form'

type SessionAsideEditorProps = {
  session?: ISessionView
  sessionDate: Date
}

const getParsedNumber = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const _value = e.target.value;

  const _payment = parseInt(_value, 10);

  return isNaN(_payment) ? 0 : _payment;
};

export const SessionAsideEditor: React.FC<SessionAsideEditorProps> = ({ session, sessionDate }) => {
  const [isEditClient, setIsEditClient] = React.useState(!!session)
  const {
    setDate,
    date,
    notesRegister,
    setDatePayed,
    datePayed,
    setClientId,
    issuedReceipt,
    toggleIssuedReceipt,
    onSubmit,
    canSubmit,
    clientId,
    selectedClientName,
    control,
    setSelectedClientName,
  } = useSessionEditor(sessionDate, session);

  const onClientSelected = (clientId: string, clientName: string) => {
    setClientId(clientId);
    setSelectedClientName(clientName);
    setIsEditClient(false);
  }

  return <div className={sessionAsideEditor}>
    <div className={section}>
      <div className={sectionTitle}>Client</div>
      {isEditClient && <div className={sectionValue}><ClientsDropdown className={sectionValue} defaultClientId={clientId} onClientChange={onClientSelected}/><IconButton onClick={() => setIsEditClient(false)}><CheckIcon /></IconButton></div>}
      {!isEditClient && <div className={sectionValue}><span>{selectedClientName ?? 'Select Client'}</span><IconButton onClick={() => setIsEditClient(true)}><EditIcon /></IconButton></div>}
    </div>
    <div className={section}>
      <div className={sectionTitle}>Payment</div>
      <Controller control={control} render={props => <TextField {...props.field} onChange={(e) => {
        props.field.onChange(getParsedNumber(e));
      }} fullWidth style={{width: '70%'}} />} name={'payment'} />
    </div>
    <div className={section}>
      <div className={sectionTitle}>Date & Time</div>
      <DateTimePicker label='Session time' className={sectionValue} onChange={date => date && setDate(date)} value={date}/>
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
      <Button variant='contained' color='primary' fullWidth onClick={onSubmit} disabled={!canSubmit}>{ session ? 'Save Changes' : 'Add session'}</Button>
    </div>
  </div>
}
