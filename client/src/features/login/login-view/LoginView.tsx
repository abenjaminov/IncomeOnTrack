import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Textbox, Button, Checkbox } from '../../../shared/components';
import { useAuth } from '../../../shared/hooks';
import classes from './login-view.module.scss';

export const LoginView: React.FC = () => {
    const emailState = React.useState('')
    const passwordState = React.useState('')
    
    const navigate = useNavigate();

    const { login } = useAuth();

    const onLoginClicked = () => {
        const [email] = emailState;
        const [password] = passwordState;

        login({
            email,
            password
        })
    }

    return (
        <div className={classes.loginView}>
            <div className={classes.title}>
                Login
            </div>
            <div className={classes.loginDetails}>
                <div className={`${classes.loginDetail} ${classes.username}`}>
                    <div className={classes.label}>Email</div>
                    <Textbox type='email' valueState={emailState}/>
                </div>
                <div className={`${classes.loginDetail}  ${classes.password}`}>
                    <div className={classes.label}>Password</div>
                    <Textbox type='password' valueState={passwordState}/>
                </div>
                <div className={classes.rememberMe}>
                    <Checkbox label='Remember me'/>
                </div>
            </div>
            <div className={classes.loginLinks}>

            </div>
            <div className={classes.actions}>
                <Button text='Login' onClick={onLoginClicked}/>
            </div>
        </div>
    )
}