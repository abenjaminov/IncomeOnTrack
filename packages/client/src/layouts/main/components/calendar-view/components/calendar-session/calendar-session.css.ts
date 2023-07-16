import {style, styleVariants} from '@vanilla-extract/css';
import {SessionState} from "@income-on-track/shared";
import {themeVars} from "@shared/style";

export const calendarSessionBase = style({
  width: '100%',
  display: 'flex',
  paddingLeft: '.5rem',
  position: 'relative',
  height: '1.5rem',
  userSelect: 'none',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      opacity: .8
    }
  }
})

export const calendarSession = styleVariants({
  [SessionState.future]: [calendarSessionBase, {
    backgroundColor: '#4682B4',
    color: themeVars.colors.text
  }],
  [SessionState.payed]: [calendarSessionBase, {
    backgroundColor: '#FF8C00',
    color: themeVars.colors.primary,
  }],
  [SessionState.debt]: [calendarSessionBase, {
    backgroundColor: '#8B0000',
    color: themeVars.colors.text,
  }],
})

export const sessionTime = style({
  position: 'absolute',
  top: '50%',
  left: '.5rem',
  transform: 'translateY(-50%)',
  fontSize: '.8rem',
  fontWeight: 'bold',
})

export const sessionClientName = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const receiptMark = style({
  position: 'absolute',
  top: '50%',
  right: '.5rem',
  transform: 'translateY(-50%)',
  fontSize: '1rem!important',
})
