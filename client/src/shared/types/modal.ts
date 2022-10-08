import { ReactNode } from "react";

export enum ModalReferenceAlign {
    top,
    center,
    left,
    right,
    bottom,
  }
  
  export interface IModalAlign {
    vertical: ModalReferenceAlign;
    horizontal: ModalReferenceAlign;
  }

export interface IModalArgs {
    name: string;
    zOrder?: number;
    positionRem?: {
      y: number;
      x: number;
    };
    component: ReactNode;
    size?: {
      width: string;
      height: string;
    };
    reference?: {
      element?: Element;
      align?: IModalAlign;
    };
    visible?: boolean;
    ignoreClickOutside?: boolean;
  }