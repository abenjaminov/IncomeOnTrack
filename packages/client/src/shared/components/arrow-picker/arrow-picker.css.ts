import { style } from '@vanilla-extract/css';

export const arrowPicker = style({
  display: 'flex',
})

export const arrowPickerSelectedItemLabel = style({
  display: 'flex',
  width: '70%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '1em!important',
})

export const arrowPickerContainer = style({
  width: '15%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export const arrowPickerArrow = style({
  display: 'flex!important',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(1em + 1rem)!important',
  cursor: 'pointer',
  lineHeight: '1em!important',
})
