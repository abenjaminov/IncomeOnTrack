import React from 'react';
import { ModalComponent } from '../../../../../../shared/components/modal';
import * as classes from './add-client-modal.css';

export const AddClientModal: React.FC = () => {
    return (
        <ModalComponent>
            <div className={classes.addClientModal}>
                Yo
            </div>
        </ModalComponent>
    )
}