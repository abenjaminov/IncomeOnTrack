import React from 'react';
import { useModal } from '../../hooks';
import { ModalContext } from './ModalContext';

interface IModalProvider {
  name: string;
  children: React.ReactNode;
}

export const ModalProvider: React.FC<IModalProvider> = props => {
  const { context } = useModal(props.name);

  return <ModalContext.Provider value={context}>{props.children}</ModalContext.Provider>;
};
