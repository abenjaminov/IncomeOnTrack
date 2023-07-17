import {createVar, style} from '@vanilla-extract/css'
import {themeVars} from "@shared/style";

export const progressWithText = style({
  position: 'relative',
  isolation: 'isolate',
  border: `1px solid ${themeVars.colors.accent2}`,
  userSelect: 'none',
})

export const percentageVar = createVar();

export const progress = style({
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: percentageVar,
  zIndex: 0,
  backgroundColor: themeVars.colors.accent2
})

export const progressText = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
})
