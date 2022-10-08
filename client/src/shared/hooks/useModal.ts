import React from 'react';
import { useModals } from './useModals';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { IModalContext } from '../components/modal/ModalContext';

export const useModal = (modalName: string) => {
  const { closeModal, showModal, hideModal } = useModals();

  const modal = useSelector((store: RootState) => {
    const result = store.modal.modals.find(x => x.name == modalName);

    return result;
  });

  const visible = useSelector((store: RootState) => {
    const result = store.modal.modals.find(x => x.name == modalName);

    return result?.visible;
  });

  const isClosed = useSelector((store: RootState) => {
    const result = store.modal.modals.find(x => x.name == modalName);

    return result == undefined;
  });

  const context: IModalContext = React.useMemo(() => {
    return {
      close: () => {
        closeModal(modalName);
      },
      show: () => {
        showModal(modalName);
      },
      hide: () => {
        hideModal(modalName);
      },
      modal: modal,
    };
  }, [modal]);

  return {
    context,
    isClosed,
  };
};
