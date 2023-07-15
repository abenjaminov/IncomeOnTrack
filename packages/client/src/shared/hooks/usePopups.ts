import {PopupArgs} from "@shared/types/popupArgs";
import {create} from "zustand";
import {createContext} from "react";

type IPopupsStore = {
  popups: Array<PopupArgs>;
  showPopup: (popup: PopupArgs) => void,
  closePopup: (name: string) => void,
}

export const usePopups = create<IPopupsStore>((set) => ({
  popups: [],
  showPopup: (popup: PopupArgs) => set((state) => ({popups: [...state.popups, popup]})),
  closePopup: (name: string) => set((state) => ({popups: state.popups.filter((popup) => popup.props.name !== name)})),
}))

export type IPopupContext = {
  name: string;
  closePopup: () => void,
}

export const PopupContext = createContext<IPopupContext>({
  name: '',
  closePopup: () => {},
})
