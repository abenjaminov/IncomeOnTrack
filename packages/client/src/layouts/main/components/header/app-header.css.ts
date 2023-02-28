import {style} from '@vanilla-extract/css';
import {themeVars} from "../../../../shared";

const classes = {
    appHeader: style({
        width: '100%',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 1rem',
        backgroundColor: themeVars.colors.primary,
        borderBottom: `0.0625rem solid ${themeVars.colors.accent}`
    }),
    logoContainer: style({

    }),
    navigationItemsContainer: style({
       display: 'flex',
       alignItems: 'center',
        gap: '.5rem'
    }),
    navigationItem: style({
        color: themeVars.colors.secondary,
        fontWeight: 600,
        fontSize: '1.25rem',
        userSelect: 'none',
        cursor: 'pointer',
        selectors: {
            '&:hover': {
                color: themeVars.colors.accent
            }
        }
    })
}

export default classes;
