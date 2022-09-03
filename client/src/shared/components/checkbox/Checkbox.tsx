import React from 'react';
import classes from './checkbox.module.scss';

export interface ICheckboxProps {
    label: string;
}

export const Checkbox: React.FC<ICheckboxProps> = (props) => {
    return (
        <div className={classes.checkbox}>
            <input type="checkbox" />
            <div className={classes.label}>{props.label}</div>
        </div>
    )
}