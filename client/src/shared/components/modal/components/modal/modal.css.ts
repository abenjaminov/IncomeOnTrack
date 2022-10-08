import { createVar, style } from '@vanilla-extract/css';

export const modalBaseZIndex = 2000;
export const modalZIndex = createVar();
export const modalTop = createVar();
export const modalLeft = createVar();
export const modalHeight = createVar();
export const modalWidth = createVar();

export const transformVertical = createVar();
export const transformHorizontal = createVar();

export const visibility = createVar();

export const modalContainer = style({
  position: 'absolute',
  width: modalWidth,
  height: modalHeight,
  zIndex: `calc(${modalBaseZIndex} + ${modalZIndex})`,
  top: modalTop,
  left: modalLeft,
  transform: `translate(${transformVertical}, ${transformHorizontal})`,
});
