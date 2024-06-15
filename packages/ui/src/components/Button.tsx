import styled from '@emotion/styled'
import './Button.css'
// import { useStoreFromZustand } from '@cloud-manager/store-zustand'
import { useCountFromJotai } from '@cloud-manager/store-jotai'

export function Button(props: { disabled?: boolean }) {
  // const {count, setCount} = useStoreFromZustand()
  const [count, setCount] = useCountFromJotai()

  return (
    <StyledButton
      className="database-StyledButton"
      disabled={props.disabled}
      // onClick={setCount}>
      onClick={() => setCount((c) => c + 1)}>
      UI Button count is {count}
    </StyledButton>
  )
}

const StyledButton = styled('button')(({
  backgroundColor: 'darkgreen',
  border: '1px solid green',
}))
