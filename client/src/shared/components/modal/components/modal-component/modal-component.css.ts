import {style} from '@vanilla-extract/css'

export const modalComponent = style({
    position: 'relative',
    height: '100%',
    width: '100%'
})

export const modalComponentContent = style({
    borderRadius: '.75rem',
    padding: '1rem',
    backgroundColor: 'white'
})

export const backDrop = style({
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})