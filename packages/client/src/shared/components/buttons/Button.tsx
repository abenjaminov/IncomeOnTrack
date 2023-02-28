import React from 'react';
import classes from './button.css';
import clsx from "clsx";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const { children, className, ...buttonProps } = props;
    return (
        <button ref={ref} {...buttonProps} className={clsx(className, classes.button)}>
            {children}
        </button>
    );
})
