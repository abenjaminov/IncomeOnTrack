import { style } from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

export const calendarDayView =  style({
  width: 'calc(14.28% - .1rem)',
  height: '100%',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  margin: '0 .05rem',
})

export const calendarDayOfMonth = style({
  position: 'absolute',
  top: '.25rem',
  left: '.5rem',
})

export const calendarWeekDayName = style({
  position: 'absolute',
  top: '.25rem',
  left: '50%',
  transform: 'translateX(-50%)',
})

export const isTodayDate = style({});

export const dayHeader = style({
  position: 'relative',
  width: '100%',
  height: '2rem',
  backgroundColor: themeVars.colors.accent2,
  color: themeVars.colors.text,
  userSelect: 'none',
  cursor: 'pointer',
  selectors: {
    [`${isTodayDate} &`]: {
      backgroundColor: themeVars.colors.accent3,
      color: themeVars.colors.text,
    }
  }
})

export const calendarDayEvents = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(100% - 2rem)'
})
