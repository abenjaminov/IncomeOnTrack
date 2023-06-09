import { style } from '@vanilla-extract/css';
import {themeVars} from "../../style";

const classes = {
    popup: style({
        position: 'absolute',
        isolation: 'isolate',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.5)'
    }),
    popupContent: style({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        position: 'absolute',
        padding: '0rem 1.5rem 1.5rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'auto',
        width: 'max-content',
    }),
    header: style({
        cursor: 'pointer',
        stroke: themeVars.colors.primary,
        height: '3rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    })
}

export default classes;
