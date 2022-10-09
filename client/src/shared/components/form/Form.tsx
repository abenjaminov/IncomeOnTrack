import React, { ReactNode } from 'react';
import { FormContext, IFormContext } from './FormContext';
import { useForm } from './useForm';

interface IFormProps {
    children: ReactNode;
    context: IFormContext
}

export const Form: React.FC<IFormProps> = (props) => {
    return <FormContext.Provider value={props.context}>{props.children}</FormContext.Provider>
}