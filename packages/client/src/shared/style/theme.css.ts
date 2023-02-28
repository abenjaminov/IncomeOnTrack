import { createTheme } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
    colors: {
        primary: '#E9F1FA',
        accent: '#00ABE4',
        secondary: 'white',
        text: 'black'
    }
})
