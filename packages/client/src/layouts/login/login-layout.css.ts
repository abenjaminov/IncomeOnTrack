import {style} from '@vanilla-extract/css';
import {themeVars} from "@shared/style";
import {CSSProperties} from "react";

const classes = {
    loginLayout: style({
        height: '100%',
        width: '100%',
        position: 'relative',
        backgroundColor: themeVars.colors.primary,
    }),
    loginBox: style({
        width: '25rem',
        height: '15rem',
        border: `1px solid`,
        borderRadius: '1rem',
        borderColor: themeVars.colors.accent1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: `-.25rem .125rem .5rem ${themeVars.colors.accent1}`,
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

export const inputBoxStyle: CSSProperties = {backgroundColor: '#454557', border: 'none', color: themeVars.colors.text1}

export default classes;
