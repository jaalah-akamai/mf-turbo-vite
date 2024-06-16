import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@cloud-manager/ui/Button'
import { Volumes } from '@cloud-manager/volumes/Volumes'
import { Volumes as Volumes2 } from '@remote/volumes/Volumes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <Volumes buttonDesc='Shared state' title={'Build Time MFE (Remote)'}/>
        <Volumes2 buttonDesc='Shared state code' title={'Runtime MFE (Remote)'} desc="The state code is shared, not the state itself." />
      </div>
    </div>
  )
}

export default App
