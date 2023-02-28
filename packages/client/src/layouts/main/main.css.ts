import {style} from '@vanilla-extract/css';

const classes = {
    mainLayout: style({
        height: '100%',
        width: '100%',
    }),
    outletContainer: style({
        height: 'calc(100% - 4rem)',
        width: '100%'
    })
}

export default classes;
