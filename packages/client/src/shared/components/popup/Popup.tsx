import React from 'react';
import classes from './popup.css';
import {ReactComponent as CloseIcon} from '../../../assets/svgs/close.svg';
import {PopupArgs} from "../../types/popupArgs";
import {usePopup} from "@shared/hooks";

export const Popup: React.FC<PopupArgs> = args => {

    const {closePopup} = usePopup()

    return (
        <div className={classes.popup}>
            <div className={classes.popupContent}>
                <div onClick={() => closePopup()} className={classes.header}>
                    <span className={classes.headerTitle}>{args.popupTitle}</span>
                    <CloseIcon />
                </div>
                {args.component}
            </div>
        </div>
    )
}
