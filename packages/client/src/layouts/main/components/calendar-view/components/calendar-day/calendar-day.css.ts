import { style } from '@vanilla-extract/css';
import {colorPallete, themeVars} from "@shared/style";

export const calendarDayView =  style({
  width: 'calc(14.28% - .1rem)',
  height: '100%',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  margin: '0 .05rem',
})

export const notThisMonth = style({
  position: 'absolute',
  top: '2rem',
  left: 0,
  width: '100%',
  height: 'calc(100% - 2rem)',
  backgroundColor: `${colorPallete.text1}77`,
})

export const addSessionButton = style({
  position: 'absolute',
  top: '.25rem',
  right: '.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: 'black',
    },
    '&:active': {
      color: themeVars.colors.text1,
    }
  }
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
  backgroundColor: themeVars.colors.accent1,
  color: themeVars.colors.text1,
  fontWeight: 'bold',
  userSelect: 'none',
  selectors: {
    [`${isTodayDate} &`]: {
      backgroundColor: themeVars.colors.text1,
      color: themeVars.colors.text2,
    }
  }
})

export const calendarDayEvents = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(100% - 2rem)'
})
