import React from 'react';
import { Routes } from '../../../../router/router';
import { useNavigation } from '../../../../shared';
import classes, {selectedItem} from './app-header.css';
import {useLocation} from "react-router-dom";
import clsx from "clsx";

export const AppHeader: React.FC = () => {

    const { navigate } = useNavigation()
    const location = useLocation();

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

    const keyPrefix = React.useId();

    return (
        <header className={classes.appHeader}>
            <div className={classes.navigationItemsContainer}>
                {navigationItems.map((item, index) => (
                  <React.Fragment key={item.text + keyPrefix}>
                    <div className={clsx(classes.navigationItem, {
                        [selectedItem]: location.pathname.includes(item.route)
                    })} onClick={() => onNavigationItemClick(item)}>{item.text}</div>
                      <div className={classes.seperator}> </div>
                  </React.Fragment>
                ))}
            </div>
        </header>
    )
}
