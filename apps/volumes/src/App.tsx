import React from 'react';
// import { useStoreFromZustand } from '@cloud-manager/store-zustand'
import { useCountFromJotai, useErrorBoundaryEnabledFromJotai } from '@cloud-manager/store-jotai'
import './App.css'

export interface VolumesProps {
  environment: string,
  desc?: string,
  buttonDesc?: string,
}

export function Volumes({ environment, desc, buttonDesc = "state" }: VolumesProps) {
  const [count, setCount] = useCountFromJotai();
  const [hasError, setError] = useErrorBoundaryEnabledFromJotai();

  // Throw an error to test the ErrorBoundary
  React.useEffect(() => {
    if (hasError) {
      throw new Error('Error boundary triggered');
    }

    () => {
      setError(true);
    }
  }, [hasError, setError]);

  const handleEvent = () => {
    setCount((c) => c + 1)
  }

  // React.useEffect(() => {
  //   // Runtime Event Listener
  //   if (!hasError) {
  //     window.addEventListener('button-click', handleEvent);
  //   }

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener('button-click', handleEvent);
  //   };
  // }, [hasError, handleEvent]);

  const handleButtonChange = () => {
    if (hasError) {
      // Build Time: Just update state normally
      handleEvent();
    } else {
      // Runtime Event Dispatch
      window.dispatchEvent(new Event('button-click'));
    }
  };

  return (
    <div>
      <h1>MFE (Remote)</h1>
      <p>Environment: <strong>{environment}</strong></p>
      <ul>
        <li>
          <a href="https://vitejs.dev" target="_blank">Vite</a>
        </li>
        <li>
          <a href="https://react.dev" target="_blank">React</a>
        </li>
        <li>
          <a href="https://emotion.sh" target="_blank">Emotion</a>
        </li>
      </ul>
      <div className="card">
        <div style={{display: 'flex', gap: '2px'}}>
        {!hasError && <button onClick={() => setError(true)}>Trigger Error Boundary</button>}
        <button onClick={handleButtonChange}>
          {buttonDesc}: count is {count}
        </button>
        </div>
        {desc && <p>{desc}</p>}
      </div>
    </div>
  )
}
