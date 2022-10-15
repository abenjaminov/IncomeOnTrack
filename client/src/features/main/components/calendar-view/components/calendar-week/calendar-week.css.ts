import {style} from '@vanilla-extract/css';

export const week = style({
    height: '20%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    selectors: {
        '&:not(:last-of-type)' : {
            borderBottom: '1px solid black'
        }
    }
})