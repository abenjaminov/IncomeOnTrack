import React, { ReactNode } from 'react';
import * as classes from './modal-component.css'

interface IModalComponentProps {
    children: ReactNode
}

export const ModalComponent: React.FC<IModalComponentProps> = (props) => {
    return (
        <div className={classes.modalComponent}>
            {props.children}
        </div>
    )
}