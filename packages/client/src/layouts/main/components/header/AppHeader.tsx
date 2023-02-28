import React from 'react';
import { Routes } from '../../../../router/router';
import { useNavigation } from '../../../../shared';
import classes from './app-header.css';

export const AppHeader: React.FC = () => {

    const { navigate } = useNavigation()

    const navigationItems = [{
        text: 'Dashboard',
        route: Routes.dashboard
    }, {
        text: 'Clients',
        route: Routes.clients
    }, {
        text: 'Sessions',
        route: Routes.sessions
    },{
        text: 'Calendar',
        route: Routes.calendar
    }]

    const onNavigationItemClick = (item: any) => {
        navigate(item.route)
    }

    return (
        <header className={classes.appHeader}>
            <div className={classes.navigationItemsContainer}>
                {navigationItems.map((item, index) => (
                    <div className={classes.navigationItem} onClick={() => onNavigationItemClick(item)}>{item.text}</div>
                ))}
            </div>
        </header>
    )
}
