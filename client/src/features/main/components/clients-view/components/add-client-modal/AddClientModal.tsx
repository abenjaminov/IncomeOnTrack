import React, { useEffect } from 'react';
import { Button, Checkbox, Textbox } from '../../../../../../shared/components';
import { Form } from '../../../../../../shared/components/form/Form';
import { useForm } from '../../../../../../shared/components/form/useForm';
import { ModalComponent } from '../../../../../../shared/components/modal';
import { useClients, useModalContext } from '../../../../../../shared/hooks';
import * as classes from './add-client-modal.css';

enum ClientFormFields {
    name = 'ClientName',
    email = 'ClientEmail',
    phoneNumer = 'ClientPhoneNumber',
    payPerHour = 'ClientPayPerHour',
    isMonthlySalary = 'ClientIsMonthlySalary'
}

export const AddClientModal: React.FC = () => {
    const { close } = useModalContext();
    const {context, fields} = useForm();

    const { createOrUpdate, isCreateOrUpdateSuccess } = useClients()

    const onAddClicked = React.useCallback(() => {
        createOrUpdate({ 
             name: fields[ClientFormFields.name].value,
             paymentPerHour: fields[ClientFormFields.payPerHour].value,
             email: fields[ClientFormFields.email].value,
             phoneNumber: fields[ClientFormFields.phoneNumer].value,
             paymentMonthOffset: fields[ClientFormFields.isMonthlySalary].value ? -1 : 0
        })
    },[fields])

    useEffect(() => {
        if(!isCreateOrUpdateSuccess) return;

        close();
    }, [isCreateOrUpdateSuccess])

    const onCancelClicked = React.useCallback(() => {
        close();
    },[])

    return (
        <ModalComponent hasBackdrop={true}>
            <div className={classes.addClientModal}>
                <div className={classes.header}>
                    New Client
                </div>
                <Form context={context}>
                    <div className={classes.content}>
                        <div className={classes.inputItem}>
                            <div className={classes.inputTitle}>
                                Name
                            </div>
                            <div className={classes.inputData}>
                                <Textbox formKey={ClientFormFields.name} initialValue='' type='text'/>    
                            </div>
                        </div>
                        <div className={classes.inputItem}>
                            <div className={classes.inputTitle}>
                                Phone Number
                            </div>
                            <div className={classes.inputData}>
                                <Textbox formKey={ClientFormFields.phoneNumer} initialValue='' type='tel'/>
                            </div>
                        </div>
                        <div className={classes.inputItem}>
                            <div className={classes.inputTitle}>
                                Email
                            </div>
                            <div className={classes.inputData}>
                                <Textbox formKey={ClientFormFields.email} initialValue='' type='email'/>    
                            </div>
                        </div>
                        <div className={classes.inputItem}>
                            <div className={classes.inputTitle}>
                                Pay per hour
                            </div>
                            <div className={classes.inputData}>
                                <Textbox formKey={ClientFormFields.payPerHour} initialValue='' type='number'/>    
                            </div>
                        </div>
                        <div className={classes.inputItem}>
                            <div className={classes.inputTitle}>
                                Monthly Salary?
                            </div>
                            <div className={classes.inputData}>
                                <Checkbox formKey={ClientFormFields.isMonthlySalary} initialValue={false}/>    
                            </div>
                        </div>
                    </div>
                </Form>
                <div className={classes.footer}>
                    <Button text='Add' onClick={onAddClicked}/>
                    <Button text='Cancel' onClick={onCancelClicked}/>
                </div>
            </div>
        </ModalComponent>
    )
}