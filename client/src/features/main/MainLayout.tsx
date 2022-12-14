import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthorizedOnly } from '../../shared/components/authorized-only/AuthorizedOnly';
import { Header } from './components/header/Header';
import * as classes from './main-layout.css';

export const MainLayout: React.FC = () => {
    return (
        <AuthorizedOnly>
            <div className={classes.mainLayout}>
                <Header />
                <div className={classes.content}>
                    <Outlet />
                </div>
            </div>
        </AuthorizedOnly>
    )
}