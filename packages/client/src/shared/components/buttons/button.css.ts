import {style} from '@vanilla-extract/css';

const classes = {
    button: style({
        width: '100%',
        height: '100%',
        borderWidth: '1px',
        borderStyle: 'solid',
        selectors: {
            '&:hover': {
                boxShadow: '.05rem .05rem 0 2px #00000077',
            },
            '&:active': {
                boxShadow: 'none',
            }
        }
    })
}

export default classes;
