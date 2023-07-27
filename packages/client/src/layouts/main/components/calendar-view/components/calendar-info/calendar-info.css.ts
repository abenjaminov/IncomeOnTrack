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

export const colorLegendItem = style({
  width: '100%',
  height: '1.5rem',
  display: 'flex',
  alignItems: 'center',
})

export const colorLegendColor = style({
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  marginRight: '.5rem',
})

export const colorLegendText = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
})

export const colorLegend = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
  marginBottom: '1rem',
  gap: '.5rem',
})
