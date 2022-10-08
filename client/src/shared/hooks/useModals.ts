import { useDispatch, useSelector } from "react-redux"
import { IModalArgs, RootState } from "../types";

import { 
    openModal as openModalInStore,
    closeModal as closeModalInStore,
    showModal as showModalInStore,
    hideModal as hideModalInStore
 } from '../slices'
import React from "react";

export const useModals = () => {
    const dispatch = useDispatch();

    const modals = useSelector((store: RootState) => {
        const result = store.modal.modals

        return result;
    })

    const openModal = React.useCallback((args: IModalArgs) => {
        dispatch(openModalInStore(args));
    }, [])

    const closeModal = React.useCallback((key: string) => {
        dispatch(closeModalInStore(key));
    }, []) 

    const showModal = React.useCallback((name: string, groupKey?: string) => {
        dispatch(showModalInStore(name));
      }, []);
    
      const hideModal = React.useCallback((name: string, groupKey?: string) => {
        dispatch(hideModalInStore(name));
      }, []);

    return {
        openModal,
        closeModal,
        hideModal, 
        showModal,
        modals
    }
}