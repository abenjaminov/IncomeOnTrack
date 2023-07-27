import {style} from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

const classes = {
    mainLayout: style({
        height: '100%',
        width: '100%',
        backgroundColor: themeVars.colors.primary,
    }),
    outletContainer: style({
        height: 'calc(100% - 5rem)',
        width: 'calc(100% - 1rem)',
        padding: '1.5rem',
        margin: '.5rem',
        backgroundColor: themeVars.colors.accent2,
    })
}

export default classes;
