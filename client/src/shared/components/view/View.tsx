import * as classes from './view.css';
import React from 'react';

interface IViewProps {
    children: any
}

export const View: React.FC<IViewProps> = (props) => {
    return (
        <div className={classes.view}>
            {props.children}
        </div>
    )
}