import React from "react";

export type IPopupPropsBase = {
    name: string;
    onClose?: () => void;
}

export type PopupArgs = {
    component: React.ReactNode;
    popupTitle: string;
    props: IPopupPropsBase;
}
