import {style} from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

const classes = {
    addClientPopup: style({
        width: '25rem',
        height: '15rem',
        display: 'flex',
        flexDirection: 'column'
    }),
    clientDetails: style({
        paddingTop: '1rem',
        height: '13rem',
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
