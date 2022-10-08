import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import { Router } from './router'
import { ModalContainer } from './shared/components/modal/ModalContainer'
import { StoreProvider } from './shared/components/srote-provider/StoreProvider'

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={() => (<>General Error</>)}>
        <StoreProvider>
          <ModalContainer />
          <Router />
        </StoreProvider>
      </ErrorBoundary>      
    </div>
  )
}

export default App
