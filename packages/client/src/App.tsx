import { useState } from 'react'
import {RouterProvider} from "react-router-dom";
import {mainRouter} from "./router/router";
import classes from './app.css';
import clsx from "clsx";
import {themeClass} from "./shared";
import '@coreui/coreui/dist/css/coreui.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={clsx(themeClass, classes.app)}>
      <RouterProvider router={mainRouter}/>
    </div>
  )
}

export default App
