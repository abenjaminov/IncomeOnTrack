import React, { useEffect, useId } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route } from '../../../../router';
import { INavigationItem } from '../../../../shared/types';
import * as classes from './header.css';

const navigationItems: Array<INavigationItem> = [{
    text: 'Home',
    route: Route.dashboard
},{
    text: 'Clients',
    route: Route.clients
},{
    text: 'Sessions',
    route: Route.sessions
},{
    text: 'Calendar',
    route: Route.calendar
}]

export const Header: React.FC = () => {
    const navItemKey = useId();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedRouteIndex, setSelectedRouteIndex] = React.useState<number>()
    
    const onNavigationItemClicked = React.useCallback((navItem: INavigationItem) => {
        navigate(navItem.route);
    }, [])

    useEffect(() => {
        const {pathname} = location;
        const _selectedRouteIndex = navigationItems.findIndex(x => pathname.startsWith(`/${x.route}`));
        setSelectedRouteIndex(_selectedRouteIndex);
    },[location])

    return (
        <div className={classes.header}>
            <div className={classes.headerSection}>
                <div className={classes.logo}>

                </div>
                <div className={classes.avatar}>

                </div>
            </div>
            <div className={classes.headerSection}>
                {navigationItems.map((navItem, index) => (
                    <div className={`${classes.navigationItem} ${index == selectedRouteIndex ? classes.selectedNavigationItem : ''}`}
                         onClick={() => onNavigationItemClicked(navItem)} 
                         key={`${navItemKey}${navItem.text}`}>
                        {navItem.text}
                    </div>
                ))}
            </div>
            <div className={classes.headerSection}>

            </div>
        </div>
    )
}