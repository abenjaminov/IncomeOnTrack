import {style} from '@vanilla-extract/css'

export const addClientModal = style({
    width: '35rem',
    display: 'flex',
    flexDirection: 'column' 
})

export const header = style({
    height: '3rem',
    fontSize: '2rem',
    fontWeight: '700'
})

export const content = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '1.5rem'
})

export const inputItem = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '2rem',
    marginBottom: '.75rem'
})

export const inputTitle = style({
    fontWeight: '500',
    fontSize: '1.25rem',
    flex: 2
})

export const inputData = style({
    flex: 3
})

export const footer = style({})