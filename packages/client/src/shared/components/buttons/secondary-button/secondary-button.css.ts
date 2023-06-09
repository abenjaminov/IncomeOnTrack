import {style} from '@vanilla-extract/css';
import {themeVars} from "../../../style";

const classes = {
    secondaryButton: style({
        backgroundColor: themeVars.colors.secondary,
        borderColor: themeVars.colors.accent,
        color: themeVars.colors.text,
    })
}

export default classes;
