import {style} from '@vanilla-extract/css';

export const tableRow = style({
    width: '100%',
    height: '2rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottom: '1px solid black',
    cursor: "pointer",
    selectors: {
        "&:hover" : {
            backgroundColor: "#F5F5F5"
        }
    }
}, 'tableRow')