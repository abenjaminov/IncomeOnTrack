import React from 'react';
import classes from './textbox.module.scss';

interface ITextboxProps {
    type: "email" | "password" | "text"
}

export const Textbox: React.FC<ITextboxProps> = (props) => {
    return (
        <div className={classes.textbox}>      
            <input type={props.type}/>
        </div>
    )
}