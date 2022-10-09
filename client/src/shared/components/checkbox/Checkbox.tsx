import React from 'react';
import { useFormContext } from '../../hooks';
import classes from './checkbox.module.scss';

export interface ICheckboxProps {
    label?: string;
    formKey: string;
    initialValue: boolean;
}

export const Checkbox: React.FC<ICheckboxProps> = (props) => {
    const { setValue, getValue } = useFormContext(props.formKey, props.initialValue);

    return (
        <div className={classes.checkbox}>
            <input type="checkbox" 
                   onChange={(x) => setValue(x.currentTarget.checked)}
                   checked={getValue()}   />
            {props.label && <div className={classes.label}>{props.label}</div>}
        </div>
    )
}