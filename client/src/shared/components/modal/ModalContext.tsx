import React from 'react';
import { IModalArgs } from '../../types';

export interface IModalContext {
  close(): void;
  show(): void;
  hide(): void;
  modal?: IModalArgs;
}

export const ModalContext = React.createContext<IModalContext>({
  close: () => {},
  show: () => {},
  hide: () => {},
  modal: undefined,
});
