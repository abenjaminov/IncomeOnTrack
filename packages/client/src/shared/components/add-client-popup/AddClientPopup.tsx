import React from 'react';
import classes from './add-client-popup.css';
import {CForm, CFormCheck, CFormInput} from "@coreui/react";
import {Button} from "@mui/material";
import {usePopup} from "@shared/hooks";
import {useAddClient} from "@shared/components/add-client-popup/useAddClient";

export const AddClientPopup: React.FC = () => {
  const { closePopup } = usePopup();
  const { nameRegister, defaultPaymentRegister, isActiveRegister, onAddClient, isLoading } = useAddClient();

    return (
        <CForm className={classes.addClientPopup} onSubmit={onAddClient}>
            <div className={classes.clientDetails}>
                <CFormInput type='text' placeholder='Name' {...nameRegister}></CFormInput>
                <CFormInput type='number' placeholder='Default payment' {...defaultPaymentRegister}></CFormInput>
                <CFormCheck label='Is Active' {...isActiveRegister}></CFormCheck>

            </div>
          <div className={classes.actionsContainer}>
            <Button className={classes.action} variant='contained' type='submit' disabled={isLoading}>{isLoading ? 'Saving' : 'Save'}</Button>
            <Button className={classes.action} variant='text'>Cancel</Button>
          </div>
        </CForm>
    )
}
