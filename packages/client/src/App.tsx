import { useState } from 'react'
import {RouterProvider} from "react-router-dom";
import {mainRouter} from "./router/router";
import classes from './app.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes.app}>
      <RouterProvider router={mainRouter}/>
    </div>
  )
}

export default App
