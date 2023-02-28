import {style} from '@vanilla-extract/css';
import {themeVars} from "../../../style";

const classes = {
    primaryButton: style({
        backgroundColor: themeVars.colors.accent,
        borderColor: themeVars.colors.primary,
        color: themeVars.colors.secondary,
    })
}

export default classes;
