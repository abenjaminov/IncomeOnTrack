import {style} from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

const classes = {
    mainLayout: style({
        height: '100%',
        width: '100%',
        backgroundColor: themeVars.colors.primary,
    }),
    outletContainer: style({
        height: 'calc(100% - 4rem)',
        width: '100%',
        padding: '2rem'
    })
}

export default classes;
