import React from 'react';
import {AuthorizedOnly} from "./components/AuthorizedOnly";
import classes from './main.css';

export const MainLayout: React.FC = () => {
    return (
        <AuthorizedOnly>
            <div className={classes.mainLayout}>
                Main Layout
            </div>
        </AuthorizedOnly>
    )
}
