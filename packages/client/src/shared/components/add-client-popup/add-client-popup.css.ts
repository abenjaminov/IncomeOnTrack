import {style} from '@vanilla-extract/css';

const classes = {
    addClientPopup: style({
        width: '25rem',
        height: '15rem',
        display: 'flex',
        flexDirection: 'column',
    }),
    title: style({
        height: '3rem',
        display: 'flex',
        fontSize: '2rem',
        width: '100%'
    }),
    clientDetails: style({
        paddingTop: '1rem',
        height: '10rem',
        width: '70%',
        gap: '.5rem',
        display: 'flex',
        flexDirection: 'column',
    }),
    actionsContainer: style({
      width: '100%',
      height: '2.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '.5rem'
    }),
    action: style({
        width: '5rem'
    })
}

export default classes;
