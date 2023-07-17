import { useState } from 'react'
import {RouterProvider} from "react-router-dom";
import {mainRouter} from "./router/router";
import classes from './app.css';
import clsx from "clsx";
import {themeClass} from "./shared";
import '@coreui/coreui/dist/css/coreui.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

const queryClient = new QueryClient();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={darkTheme}>
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
