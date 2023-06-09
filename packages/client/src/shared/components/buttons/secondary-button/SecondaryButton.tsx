import React from 'react';
import {Button, IButtonProps} from "../Button";
import classes from './secondary-button.css';
import clsx from "clsx";

export interface ISecondaryButtonProps extends IButtonProps {}

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ISecondaryButtonProps>((props, ref) => {
    const { className, ...rest} = props;
    return (
        <Button ref={ref} {...rest} className={clsx(className, classes.secondaryButton)}/>
    );
})
