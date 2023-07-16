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
  width: '20%',
  height: '100%',
  padding: '0 0 0 .5rem'
})
