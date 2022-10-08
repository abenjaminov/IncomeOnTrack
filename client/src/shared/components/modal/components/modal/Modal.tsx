import Portal from '@reach/portal';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import React from 'react';
import { useModals, useOutsideClick } from '../../../../hooks';
import { IModalArgs, ModalReferenceAlign } from '../../../../types';
import { ModalProvider } from '../../ModalProvider';
import * as classes from './modal.css';
import {
  modalZIndex,
  modalTop,
  modalLeft,
  modalHeight,
  modalWidth,
  transformHorizontal,
  transformVertical,
} from './modal.css';

export const Modal: React.FC<IModalArgs> = props => {
  const modalRef = React.useRef();

  let alignAdditionX = 0;
  let alignAdditionY = 0;

  if (!props.ignoreClickOutside) {
    const { closeModal } = useModals();
    useOutsideClick(modalRef, () => {
      closeModal(props.name);
    });
  }

  const transform = ['0', '0'];
  const position = ['0px', '0px'];
  const size = ['auto', 'auto'];

  if (props.reference && props.reference.element) {
    transform[0] = '50%';
    transform[1] = '-50%';

    const boundingRect = props.reference.element.getBoundingClientRect();

    const alignment = props.reference.align ?? {
      horizontal: ModalReferenceAlign.center,
      vertical: ModalReferenceAlign.center,
    };

    if (alignment.horizontal == ModalReferenceAlign.left) {
      alignAdditionX = boundingRect.width;
      transform[0] = '0';
    } else if (alignment.horizontal == ModalReferenceAlign.center) {
      alignAdditionX = boundingRect.width / 2;
      transform[0] = '-50%';
    }

    if (alignment.vertical == ModalReferenceAlign.center) {
      alignAdditionY = boundingRect.height / 2;
    }

    position[0] = `${boundingRect.x + alignAdditionX}px`;
    position[1] = `${boundingRect.y + alignAdditionY}px`;
  }

  if (props.positionRem) {
    position[0] = `${position[0]} + ${props.positionRem.x}rem`;
    position[1] = `${position[1]} + ${props.positionRem.y}rem`;
  }

  position[0] = `calc(${position[0]})`;
  position[1] = `calc(${position[1]})`;

  if (props.size) {
    size[0] = props.size.width;
    size[1] = props.size.height;
  }

  // We want to enable component that need preload to load its resources (like videos)
  // 1. visibility: 'hidden' doesnt enable preload, the element will not be in the DOM
  // 2. display: 'none' also doesnt enable the preload of elements
  // 3. The solution is to send the modal way back in the app so it will hide behind everything and
  //    then when its visible bring it back to front
  const zIndexAddition = props.visible || props.visible == undefined ? 0 : -99999;

  return (
    <Portal>
      <ModalProvider name={props.name}>
        <div
          className={classes.modalContainer}
          style={assignInlineVars({
            [modalZIndex]: `${(props.zOrder ?? 0) + zIndexAddition}`,
            [modalTop]: `${position[1]}`,
            [modalLeft]: `${[position[0]]}`,
            [modalHeight]: `${size[1]}`,
            [modalWidth]: `${size[0]}`,
            [transformVertical]: `${transform[0]}`,
            [transformHorizontal]: `${transform[1]}`,
          })}
          ref={modalRef}
        >
          {props.component}
        </div>
      </ModalProvider>
    </Portal>
  );
};
