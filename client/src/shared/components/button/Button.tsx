import React from 'react';
import classes from './button.module.scss';

interface IButtonProps {
    text: string
}

export const Button: React.FC<IButtonProps> = (props) => {
    return (
        <button className={classes.button}>
            {props.text}
        </button>
    )
}