import {style} from '@vanilla-extract/css'

export const day = style({
    width: '20%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px .5rem',
    selectors: {
        '&:not(:last-of-type)' : {
            borderRight: '1px solid black'
        }
    }
})

export const dayHeader = style({
    display: 'flex',
    justifyContent: 'space-between'
})

export const daySessions = style({})