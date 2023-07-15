import { style } from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

const classes = {
    loginLayout: style({
        height: '100%',
        width: '100%',
        position: 'relative',
        backgroundColor: themeVars.colors.accent1,
    }),
    loginBox: style({
        width: '25rem',
        height: '15rem',
        border: `1px solid`,
        borderRadius: '1rem',
        borderColor: themeVars.colors.accent2,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: `-.25rem .125rem .5rem ${themeVars.colors.accent2}`,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
    }),
    loginCredentialsContainer: style({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    }),
    loginSingleCredentialContainer: style({
        display: 'flex',
        flexDirection: 'column',
    }),
    actionsContainer: style({
        width: '100%',
        display: 'flex',
        height: '2.5rem',
        justifyContent: 'center'
    }),
    loginButton: style({
        width: '6.25rem'
    })
}

export default classes;
