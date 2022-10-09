import React from 'react';
import { IModalArgs } from '../../types';

export interface IFormContext {
  setValue(key: string, value:string): void;
  register(key: string, initialValue: any): void
  getValue(key: string): any
}

export const FormContext = React.createContext<IFormContext>({
  setValue: (key: string, value:string) => {},
  register: (key: string, initialValue: any) => {},
  getValue: (key: string) => { return null}
});
