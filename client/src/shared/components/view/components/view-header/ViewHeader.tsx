import React, { ReactNode } from 'react';
import * as classes from './view-header.css';

interface IViewHeaderProps {
    children: ReactNode
}

export const ViewHeader: React.FC<IViewHeaderProps> = (props) => {
    return (
        <div className={classes.viewHeader}>
            {props.children}
        </div>
    )
}