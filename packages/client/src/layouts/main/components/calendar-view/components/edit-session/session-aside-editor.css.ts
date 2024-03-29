import { style } from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

export const sessionAsideEditor = style({
  width: '100%',
  height: '100%',
  paddingTop: '1rem',
  paddingLeft: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const section = style({
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  alignItems: 'center',
})

export const sectionTitle = style({
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '3.5rem'
})

export const sectionValue = style({
  width: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const dynamicSection = style({
  width: '100%',
  height: 'fit-content'
})
