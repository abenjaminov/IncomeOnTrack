import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './login-layout.module.scss';

export const LoginLayout: React.FC = () => {
    return (
        <div className={classes.loginLayout}>
            <Outlet />
        </div>
    )
}