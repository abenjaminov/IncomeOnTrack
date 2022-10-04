import {style} from '@vanilla-extract/css';

export const tableCell = style({
    height: '100%',
    borderLeft: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
        '&:last-child' : {
            borderRight: '1px solid black'
        }
    }
})

export const bigCell = style({
    flex: '8rem'
})

export const smallCell = style({
    width: '5rem'
})

export const extendedCell = style({
    flex: 1
})