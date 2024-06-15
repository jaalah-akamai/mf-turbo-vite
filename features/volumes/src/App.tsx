// import React from 'react';
// import { useStoreFromZustand } from '@cloud-manager/store-zustand'
import { useCountFromJotai } from '@cloud-manager/store-jotai'
import './App.css'

export interface VolumesProps {
  title: string
}

export function Volumes({ title }: VolumesProps) {
  // const { count, setCount } = useStoreFromZustand()
  const [count, setCount] = useCountFromJotai();
  // const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>{title}z</h1>
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
      {/* <button onClick={setCount}> */}
        <button onClick={() => setCount((c) => c + 1)}>
          Shared state: count is {count}
        </button>
      </div>
    </div>
  )
}
