import React from 'react';
import classes from './login-layout.css';
import {CForm, CFormInput, CFormLabel} from "@coreui/react";
import {PrimaryButton, useNavigation} from "../../shared";

export const LoginLayout: React.FC = () => {

    const { navigate } = useNavigation()

    const onSubmit = () => {
        localStorage.setItem('ioc-token', '123123123');

        navigate('/');
    }

    return (
        <div className={classes.loginLayout}>
            <div className={classes.loginBox}>
                <CForm className={classes.loginCredentialsContainer}>
                    <div className={classes.loginSingleCredentialContainer}>
                        <CFormLabel htmlFor='loginUserNameOrEmail'>Username \ Email</CFormLabel>
                        <CFormInput id="loginUserNameOrEmail"></CFormInput>
                    </div>
                    <div className={classes.loginSingleCredentialContainer}>
                        <CFormLabel htmlFor='loginPassword'>Password</CFormLabel>
                        <CFormInput id="loginPassword"></CFormInput>
                    </div>
                    <div className={classes.actionsContainer}>
                        <PrimaryButton className={classes.loginButton} type="submit" onClick={onSubmit}>Login</PrimaryButton>
                    </div>
                </CForm>
            </div>
        </div>
    );
}
