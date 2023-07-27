import { useState } from 'react'
import {RouterProvider} from "react-router-dom";
import {mainRouter} from "./router/router";
import classes from './app.css';
import clsx from "clsx";
import {colorPallete, themeClass} from "./shared";
import '@coreui/coreui/dist/css/coreui.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import './shared/style/globalStyles.css';
const queryClient = new QueryClient();

const muiTheme = createTheme({
  palette: {
    primary: {
      main: colorPallete.primary,
    },
    secondary: {
      main: colorPallete.accent1,
    },
    text: {
      primary: colorPallete.text1,
    },
    action: {
      active: colorPallete.text1,
    },
    background: {
      paper: colorPallete.accent2,
      default: colorPallete.accent1,
    }
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colorPallete.text1,
          ":hover": {
            backgroundColor: `${colorPallete.text1}33`,
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          border: `1px solid ${colorPallete.text1}`,
          boxShadow: `1px 1px 5px 0px ${colorPallete.text1}BB`,
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: colorPallete.accent2,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: colorPallete.text1,
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: colorPallete.text1,
        }
      }
    }
  }
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={muiTheme}>
        <div className={clsx(themeClass, classes.app)}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={mainRouter}/>
            </QueryClientProvider>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
