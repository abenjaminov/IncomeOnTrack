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
  height: '3rem',
  width: '100%',
  backgroundColor: themeVars.colors.accent2,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  position: 'relative'
});

export const calendarInfoTitleText = style({
  color: themeVars.colors.text,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
})

export const backButton = style({
  left: '1rem',
  top: '50%',
  width: '2rem',
  transform: 'translateY(-50%)',
  height : '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: themeVars.colors.accent3
    },
    '&:active': {
      color: themeVars.colors.text
    }
  }
})
