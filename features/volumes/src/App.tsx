import { useStore } from '@cloud-manager/store'
import './App.css'

export function Volumes() {
  const { count, setCount } = useStore()

  return (
    <div>
      <h1>Volumes</h1>
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
        <button onClick={setCount}>
          Shared state: count is {count}
        </button>
      </div>
    </div>
  )
}
