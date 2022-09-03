import React from 'react';
import { Textbox, Button, Checkbox } from '@/shared/components';
import classes from './login-view.module.scss';

export const LoginView: React.FC = () => {
    return (
        <div className={classes.loginView}>
            <div className={classes.title}>
                Login
            </div>
            <div className={classes.loginDetails}>
                <div className={`${classes.loginDetail} ${classes.username}`}>
                    <div className={classes.label}>Email</div>
                    <Textbox type='email'/>
                </div>
                <div className={`${classes.loginDetail}  ${classes.password}`}>
                    <div className={classes.label}>Password</div>
                    <Textbox type='password'/>
                </div>
                <div className={classes.rememberMe}>
                    <Checkbox label='Remember me'/>
                </div>
            </div>
            <div className={classes.loginLinks}>

            </div>
            <div className={classes.actions}>
                <Button text='Login'/>
            </div>
        </div>
    )
}