import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import { Router } from './router'

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={() => (<>General Error</>)}>
        <Router />
      </ErrorBoundary>      
    </div>
  )
}

export default App
