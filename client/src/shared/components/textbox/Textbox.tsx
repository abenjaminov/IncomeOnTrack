import React from 'react';
import { useFormContext } from '../../hooks';
import classes from './textbox.module.scss';

interface ITextboxProps {
    type: "email" | "password" | "text" | "number" | "tel",
    formKey: string,
    initialValue: string
}

export const Textbox: React.FC<ITextboxProps> = (props) => {
    const { getValue, setValue } = useFormContext(props.formKey, props.initialValue);

    return (
        <div className={classes.textbox}>      
            <input type={props.type} 
                   onChange={(x) => setValue(x.target.value)}
                   value={getValue()}/>
        </div>
    )
}