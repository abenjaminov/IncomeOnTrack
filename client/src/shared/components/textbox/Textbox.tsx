import React from 'react';
import classes from './textbox.module.scss';

interface ITextboxProps {
    type: "email" | "password" | "text",
    valueState: [string, React.Dispatch<React.SetStateAction<string>>]
}

export const Textbox: React.FC<ITextboxProps> = (props) => {
    const [input, setInput] = props.valueState;
    
    return (
        <div className={classes.textbox}>      
            <input type={props.type} 
                   onChange={(x) => setInput(x.target.value)}
                   value={input}/>
        </div>
    )
}