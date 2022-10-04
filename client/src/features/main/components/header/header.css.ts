import {style } from '@vanilla-extract/css';

export const header = style({
    width: '100%',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem'
})

export const headerSection = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
})

export const logo = style({
    height: '3.5rem',
    width: '3.5rem',
    backgroundColor: 'red',
    borderRadius: '50%',
    marginRight: '1rem'
})

export const avatar = style({
    height: '3.5rem',
    width: '3.5rem',
    backgroundColor: 'blue',
    borderRadius: '50%'
})

export const navigationItem = style({
    fontSize: '1rem',
    flex: 1,
    cursor: 'pointer'
})

export const selectedNavigationItem = style({
    textDecoration: 'underline'
})