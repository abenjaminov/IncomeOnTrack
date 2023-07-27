import {style, styleVariants} from '@vanilla-extract/css';
import {SessionState} from "@income-on-track/shared";
import {themeVars} from "@shared/style";
import {sessionColors} from "../../calendar-view.css";

export const sessionSelected = style({})

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
    },
    [`${sessionSelected}.&`]: {
      border: `2px solid ${themeVars.colors.text1}`,
    }
  }
})

export const calendarSession = styleVariants({
  [SessionState.future]: [calendarSessionBase, {
    backgroundColor: sessionColors[SessionState.future],
    color: themeVars.colors.text2
  }],
  [SessionState.payed]: [calendarSessionBase, {
    backgroundColor: sessionColors[SessionState.payed],
    color: themeVars.colors.primary,
  }],
  [SessionState.debt]: [calendarSessionBase, {
    backgroundColor: sessionColors[SessionState.debt],
    color: themeVars.colors.text2,
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
