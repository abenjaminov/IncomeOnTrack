import React from 'react';
import classes from './button.module.scss';

interface IButtonProps {
    text: string;
    onClick: () => void
}

export const Button: React.FC<IButtonProps> = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            {props.text}
        </button>
    )
}