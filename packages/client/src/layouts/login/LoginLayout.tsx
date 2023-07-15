import React from 'react';
import classes from './login-layout.css';
import {CForm, CFormInput, CFormLabel} from "@coreui/react";
import {useNavigation} from "../../shared";
import {Button} from "@mui/material";
import {useLogin} from "./useLogin";
import clsx from "clsx";
import { errorInput } from '@shared/style/form.css'

export const LoginLayout: React.FC = () => {

    const { emailRegistration, passwordRegistration, emailFieldError, passwordFieldError, onLoginSubmit } = useLogin();

    return (
        <div className={classes.loginLayout}>
            <div className={classes.loginBox}>
                <CForm className={classes.loginCredentialsContainer} onSubmit={onLoginSubmit}>
                    <div className={classes.loginSingleCredentialContainer}>
                        <CFormLabel htmlFor='loginUserNameOrEmail'>Username \ Email</CFormLabel>
                        <CFormInput id="loginUserNameOrEmail" {...emailRegistration} className={clsx({
                            [errorInput]: emailFieldError
                        })}></CFormInput>
                    </div>
                    <div className={classes.loginSingleCredentialContainer}>
                        <CFormLabel htmlFor='loginPassword'>Password</CFormLabel>
                        <CFormInput id="loginPassword" type="password" {...passwordRegistration} className={clsx({
                            [errorInput]: passwordFieldError
                        })}></CFormInput>
                    </div>
                    <div className={classes.actionsContainer}>
                        <Button variant='contained' type="submit">Login</Button>
                    </div>
                </CForm>
            </div>
        </div>
    );
}
