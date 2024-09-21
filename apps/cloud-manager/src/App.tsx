import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@cloud-manager/ui/Button'
import { useCountFromJotai, useErrorBoundaryEnabledFromJotai } from '@cloud-manager/store-jotai'
import { Volumes } from '@cloud-manager/volumes/Volumes' // Fallback
import { Volumes as Volumes2 } from '@remote/volumes/Volumes' // Remote / MFE
import './App.css'

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [boundaryError, setBoundaryError] = useErrorBoundaryEnabledFromJotai();
  const [_b, setSharedCount] = useCountFromJotai()

  const handleButtonClick = () => {
    setSharedCount((prevCount) => prevCount + 1);
  };

  const handleErrorBoundaryClick = () => {
    setBoundaryError(true);
  }

  React.useEffect(() => {
    window.addEventListener('error-boundary', handleErrorBoundaryClick);
    window.addEventListener('button-click', handleButtonClick);

    return () => {
      window.removeEventListener('error-boundary', handleErrorBoundaryClick);
      window.removeEventListener('button-click', handleButtonClick);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
    }}>
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Cloud Manager (Host)</h1>
        <div className="card">
          <p>ErrorBoundary Enabled: {boundaryError.toString()}</p>
          <div style={{
            display: 'flex',
            gap: '1rem',
          }}>
          <button onClick={() => setCount((count) => count + 1)}>
            Local state: count is {count}
          </button>
          <Button />
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex',
        gap: '2rem',
      }}>
        <ErrorBoundary fallback={<Volumes buttonDesc='Shared state (Fallback)' environment={'Build Time'} />}>
          <Volumes2 buttonDesc='Shared state code' environment={'Runtime'} desc="The state code is shared, NOT the state itself." />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
