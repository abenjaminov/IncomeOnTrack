import { style } from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

export const classes = {
    clientsView: style({
        height: '100%',
        width: '100%',
        padding: '3rem',
        color: themeVars.colors.text
    })
}

export default classes;
