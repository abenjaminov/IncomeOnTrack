import {useContext, useState} from "react";
import {PopupContext} from "@shared/hooks/usePopups";

export const usePopup = () => {
    const popupContext = useContext(PopupContext);

    return popupContext;
}
