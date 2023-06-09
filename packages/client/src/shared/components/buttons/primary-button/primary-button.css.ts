import {style} from '@vanilla-extract/css';
import {themeVars} from "../../../style";

const classes = {
    primaryButton: style({
        backgroundColor: themeVars.colors.primary,
        borderColor: themeVars.colors.accent,
        color: 'white',
    })
}

export default classes;
