import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@repo/ui/Button'
import { Navigation } from '@repo/navigation/Navigation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: 'flex'
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
        <h1>Cloud Manager</h1>
        <div className="card">
          <div style={{
            display: 'flex',
            gap: '1rem',
          }}>
          <button onClick={() => setCount((count) => count + 1)}>
            App count is {count}
          </button>
          <Button />
          </div>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Navigation />
    </div>
  )
}

export default App
