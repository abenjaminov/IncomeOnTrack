import { globalStyle } from '@vanilla-extract/css';
import {themeVars} from "@shared/style/theme.css";

globalStyle(  'html', {
  fontSize: '16px',
  "@media": {
    "(min-width: 1920px)": {
      fontSize: '16px',
    },
    "screen and (min-width: 1367px) and (max-width: 1919px)": {
      fontSize: '14px',
    },
    "screen and (max-width: 1366px)": {
      fontSize: '12px',
    }
  },
  color: themeVars.colors.text1
});
