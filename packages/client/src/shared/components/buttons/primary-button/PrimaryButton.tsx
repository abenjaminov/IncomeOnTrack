import React from 'react';
import {Button, IButtonProps} from "../Button";
import classes from './primary-button.css';
import clsx from "clsx";

export interface IPrimaryButtonProps extends IButtonProps {}

export const PrimaryButton = React.forwardRef<HTMLButtonElement, IPrimaryButtonProps>((props, ref) => {
    const { className, ...rest} = props;
    return (
        <Button ref={ref} {...rest} className={clsx(className, classes.primaryButton)}/>
    );
})
