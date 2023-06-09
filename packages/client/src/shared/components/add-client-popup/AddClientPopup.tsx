import React from 'react';
import classes from './add-client-popup.css';
import {CForm, CFormCheck, CFormInput} from "@coreui/react";
import {PrimaryButton} from "../buttons";
import {SecondaryButton} from "../buttons";

export const AddClientPopup: React.FC = () => {
    return (
        <div className={classes.addClientPopup}>
            <span className={classes.title}>Add Client</span>
            <CForm className={classes.clientDetails}>
                <CFormInput type='text' placeholder='Name'/>
                <CFormInput type='number' placeholder='Default payment'/>
                <CFormCheck label='Salary payment'/>
            </CForm>
            <div className={classes.actionsContainer}>
                <PrimaryButton className={classes.action}>Save</PrimaryButton>
                <SecondaryButton className={classes.action}>Cancel</SecondaryButton>
            </div>
        </div>
    )
}
