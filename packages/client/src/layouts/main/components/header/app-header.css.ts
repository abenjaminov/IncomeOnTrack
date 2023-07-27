import {style} from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

export const selectedItem = style({})

const classes = {
    appHeader: style({
        width: '100%',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 1rem',
        backgroundColor: themeVars.colors.accent2,
        borderBottom: `0.0625rem solid ${themeVars.colors.accent2}`
    }),
    logoContainer: style({

    }),
    navigationItemsContainer: style({
       display: 'flex',
       alignItems: 'center',
        gap: '.5rem'
    }),
    navigationItem: style({
        color: themeVars.colors.text1,
        fontWeight: 600,
        fontSize: '1.25rem',
        userSelect: 'none',
        cursor: 'pointer',
        padding: '.5rem',
        selectors: {
            '&:hover': {
                color: themeVars.colors.text1
            },
            [`&.${selectedItem}`]: {
                borderBottom: `0.125rem solid ${themeVars.colors.text1}`
            }
        },
    }),
    seperator: style({
        height: '1.5rem',
        width: '1px',
        backgroundColor: themeVars.colors.text1,
    })
}

export default classes;
