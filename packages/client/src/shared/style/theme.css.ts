import { createTheme as createVanillaTheme } from '@vanilla-extract/css';

export const colorPallete = {
      primary: '#F5F5F5',
      accent1: '#F2EAD3',
      accent2: '#DFD7BF',
      text1: '#3F2305',
      text2: 'whitesmoke',
}

export const [themeClass, themeVars] = createVanillaTheme({
    colors: {
        primary: colorPallete.primary,
        accent1: colorPallete.accent1,
        accent2: colorPallete.accent2,
        text1: colorPallete.text1,
        text2: colorPallete.text2,
    }
})
