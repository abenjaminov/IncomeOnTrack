import React from 'react';
import {AuthorizedOnly} from "./components/AuthorizedOnly";
import classes from './main.css';
import {AppHeader} from "./components/header/AppHeader";
import {Outlet} from "react-router-dom";
import {PopupsContainer} from "@shared/components/popups-container/PopupsContainer";

export const MainLayout: React.FC = () => {
    return (
        <AuthorizedOnly>
            <div className={classes.mainLayout}>
                <AppHeader />
                <div className={classes.outletContainer}>
                    <PopupsContainer />
                    <Outlet />
                </div>
            </div>
        </AuthorizedOnly>
    )
}
