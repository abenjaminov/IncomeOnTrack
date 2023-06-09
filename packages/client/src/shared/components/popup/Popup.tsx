import React from 'react';
import classes from './popup.css';
import {ReactComponent as CloseIcon} from '../../../assets/svgs/close.svg';
import {PopupArgs} from "../../types/popupArgs";
import {usePopup} from "../../hooks/usePopup";

export const Popup: React.FC<PopupArgs> = args => {

    const {hidePopup} = usePopup()

    return (
        <div className={classes.popup}>
            <div className={classes.popupContent}>
                <div onClick={hidePopup} className={classes.header}>
                    <CloseIcon />
                </div>
                {args.component}
            </div>
        </div>
    )
}
