import { createTheme } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
    colors: {
        primary: '#00ABE4',
        accent: '#E9F1FA',
        secondary: 'white',
        text: 'black'
    }
})
