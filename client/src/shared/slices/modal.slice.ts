import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalArgs } from "../types";

export interface IModalSlice {
    modals: any[]
}

const initialState: IModalSlice = {
    modals: [],
  };

export const modalsSlice = createSlice({
    name: 'modalsSlice',
    initialState: initialState,
    reducers: {
        openModal(state: IModalSlice, action: PayloadAction<IModalArgs>) {
            state.modals.push(action.payload);
        },
        closeModal(state: IModalSlice, action: PayloadAction<string>) {
            const modalIndex = state.modals.findIndex(x => x.name == action.payload);
    
            if (modalIndex < 0) return;
    
            state.modals.splice(modalIndex, 1);
        },
        showModal(state: IModalSlice, action: PayloadAction<string>) {
            const modal = state.modals.find(x => x.name == action.payload);
      
            if (!modal) return;
      
            modal.visible = true;
          },
          hideModal(state: IModalSlice, action: PayloadAction<string>) {
            const modal = state.modals.find(x => x.name == action.payload);
      
            if (!modal) return;
      
            modal.visible = false;
          },
    }
})

export const { closeModal, hideModal, openModal, showModal } = modalsSlice.actions;

export default modalsSlice.reducer;