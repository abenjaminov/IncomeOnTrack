import React, { ReactNode, useRef } from 'react';
import { useModalContext, useOutsideClick } from '../../../../hooks';
import * as classes from './modal-component.css'

interface IModalComponentProps {
    hasBackdrop?: boolean;
    children: ReactNode
}

export const ModalComponent: React.FC<IModalComponentProps> = (props) => {

    const { close, modal } = useModalContext()
    const contentRef = useRef();

    useOutsideClick(contentRef, () => {
        if(modal?.ignoreClickOutside) return;

        close();
    })
    

    const content = React.useMemo(() => {
        return (
            <div className={classes.modalComponentContent} ref={contentRef}>
                {props.children}
            </div>
        )
    },[props.children])


    return (
        <div className={classes.modalComponent}>
            {props.hasBackdrop && 
                <div className={classes.backDrop}>
                    {content}
                </div>}
            {!props.hasBackdrop && content}
        </div>  
    )
}