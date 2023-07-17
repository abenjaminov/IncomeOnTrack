import { style } from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

export const calendarView =  style({
  height: '100%',
  width: '100%',
  display: 'flex',
  overflowY: 'auto',
})

export const calendarContainer = style({
  height: '100%',
  width: '80%',
  display: 'flex',
  flexDirection: 'column'
})

export const calendarAsideContainer = style({
  height: '100%',
  width: '20%',
  display: 'flex',
  flexDirection: 'column',
})

export const calendarInfoTitle = style({
  height: '2rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: themeVars.colors.accent2,
  fontSize: '1.5rem',
  fontWeight: 'bold'
});
