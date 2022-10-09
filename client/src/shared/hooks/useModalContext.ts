import React from 'react';
import { ModalContext } from '../components/modal/ModalContext';

export const useModalContext = () => {
  return React.useContext(ModalContext);
};
