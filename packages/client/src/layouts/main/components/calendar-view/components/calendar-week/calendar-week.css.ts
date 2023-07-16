import { style } from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

export const calendarWeekView =  style({
  width: '100%',
  display: 'flex',
  minHeight: '8rem',
  height: '20%',
  borderBottom: `1px solid ${themeVars.colors.accent2}`,
  borderLeft: `1px solid ${themeVars.colors.accent2}`,
  selectors: {
    '&:first-child': {
      borderTop: `1px solid ${themeVars.colors.accent2}`
    }
  }
})
