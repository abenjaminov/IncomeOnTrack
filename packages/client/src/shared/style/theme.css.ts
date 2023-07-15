import { createTheme } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
    colors: {
        primary: 'rgb(10, 25, 41)',
        accent1: 'rgb(3, 169, 244)',
        accent2: 'rgb(233, 30, 99)',
        accent3: 'rgb(156, 39, 176)',
        accent4: 'rgb(255, 152, 0)',
        text: 'whitesmoke'
    }
})
