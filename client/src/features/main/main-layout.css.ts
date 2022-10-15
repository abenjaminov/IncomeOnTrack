import {style} from '@vanilla-extract/css';

export const mainLayout = style({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
})

export const content = style({
    height: 'calc(100% - 5rem)'
})