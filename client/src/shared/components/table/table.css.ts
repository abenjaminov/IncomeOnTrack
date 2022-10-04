import {style} from '@vanilla-extract/css';

export const table = style({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
})

export const headerRow = style({
    borderBottom: '1px solid black',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    fontWeight: '500',
    height: '2.5rem'
})