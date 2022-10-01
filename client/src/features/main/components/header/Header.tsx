import React from 'react';
import * as classes from './header.css';

export const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerSection}>
                <div className={classes.logo}>

                </div>
                <div className={classes.avatar}>

                </div>
            </div>
            <div className={classes.headerSection}>
                <div className={classes.navigationItem}>

                </div>
            </div>
            <div className={classes.headerSection}>

            </div>
        </div>
    )
}