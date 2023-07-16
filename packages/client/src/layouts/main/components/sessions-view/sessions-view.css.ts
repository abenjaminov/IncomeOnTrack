import { style } from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

export const sessionsView =  style({
  height: '100%',
  width: '100%',
  color: themeVars.colors.text,
  display: 'flex'
});


export const tableContainer = style({
  height: '100%',
  marginRight: '.5rem',
  width: 'calc(80% - .5rem)'
});
