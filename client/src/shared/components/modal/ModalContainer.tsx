import React, { useId } from 'react';
import { useModals } from '../../hooks';
import { Modal } from './components/modal/Modal';

export const ModalContainer: React.FC = () => {
    const modalKey = useId()
    const {modals} = useModals();

    return <>{modals.length > 0 && modals.map((props, i) => <Modal {...props} key={`${modalKey}${props.name}`} />)}</>;
}