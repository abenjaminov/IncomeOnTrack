import {style} from "@vanilla-extract/css";

export const calendarInfoContainer = style({
  width: '100%',
  height: 'calc(100% - 2rem)',
  padding: '0 0 0 .5rem',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '.5rem'
})

export const progressTitle = style({
  width: '40%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 1rem',
  fontSize: '1.5rem',
})

export const progressContainer = style({
  height: '3rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  width: '60%'
})

export const progressSection = style({
  width: '100%',
  height: '3rem',
  display: 'flex',
  marginTop: '1rem',
  userSelect: 'none',
})
