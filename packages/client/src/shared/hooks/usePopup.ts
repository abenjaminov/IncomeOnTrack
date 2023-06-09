import {useState} from "react";
import {PopupArgs} from "../types/popupArgs";
import { create } from 'zustand';

type IPopupStore = {
    popup: PopupArgs | null;
    showPopup: (popup: PopupArgs) => void,
    hidePopup: () => void,
}

export const usePopup = create<IPopupStore>((set) => ({
    popup: null,
    showPopup: (popup: PopupArgs) => set({popup}),
    hidePopup: () => set({popup: null}),
}));
