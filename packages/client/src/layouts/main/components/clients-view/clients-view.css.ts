import { style } from '@vanilla-extract/css';
import {themeVars} from "@shared/style";

export const classes = {
    clientsView: style({
        height: '100%',
        width: '100%',
        color: themeVars.colors.text,
        display: 'flex'
    }),
    tableContainer: style({
        height: '100%',
        marginRight: '.5rem',
        width: 'calc(80% - .5rem)'
    }),
    asideContainer: style({
        width: '20%',
        height: '100%',
        padding: '0 .5rem',
        borderLeft: `1px solid ${themeVars.colors.accent2}`,
        display: 'flex',
        flexDirection: 'column'
    }),
    asideFiltersContainer: style({
        width: '100%',
        height: '50%'
    }),
    asideActionsContainer: style({
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
    }),
    asideTitle: style({
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: themeVars.colors.text,
        height: '3rem',
        borderBottom: `1px solid ${themeVars.colors.accent2}`,
        padding: '.5rem',
        marginBottom: '.5rem'
    })
}

export default classes;
